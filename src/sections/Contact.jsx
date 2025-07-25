import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [formStatus, setFormStatus] = useState(null); // success | error | loading

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message || !formData.number) {
      setFormStatus("error");
      return;
    }

    try {
      setFormStatus("loading");

      await emailjs.send(
        "your_service_id",
        "your_template_id",
        formData,
        "your_user_id"
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "", number: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white text-gray-900 p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

            {formStatus === "success" && (
              <p role="status" className="text-green-600 mb-4">
                ✅ Message sent successfully!
              </p>
            )}
            {formStatus === "error" && (
              <p role="alert" className="text-red-600 mb-4">
                ❌ Something went wrong. Please check the form and try again.
              </p>
            )}

            <form onSubmit={handleSubmit}>
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Phone Number", name: "number", type: "tel" },
                { label: "Email", name: "email", type: "email" },
              ].map(({ label, name, type }) => (
                <div className="mb-4" key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>

              <button
                type="submit"
                className={`w-full font-semibold py-2 px-4 rounded transition duration-300 ${
                  formStatus === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-white hover:text-blue-600 text-white"
                }`}
                disabled={formStatus === "loading"}
                aria-busy={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <p className="text-gray-200 mb-6">
              Feel free to reach out through the following channels:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="w-6 h-6 text-gray-300 mr-4" />
                <a
                  href="mailto:9hrushikesh@gmail.com"
                  className="text-blue-200 hover:text-white"
                >
                  9hrushikesh@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="w-6 h-6 text-gray-300 mr-4" />
                <a
                  href="https://linkedin.com/in/hrushikeshjena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="w-6 h-6 text-gray-300 mr-4" />
                <a
                  href="https://wa.me/7789999500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
