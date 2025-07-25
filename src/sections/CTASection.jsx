import { useRef, useState, useCallback } from "react";
import { sendEmail } from "../utils/email";
import TeamCollab from "../assets/team-collaborate-with-hrushikeshjena.webp";

const CTASection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus("");
      setError("");
      setIsSubmitting(true);

      try {
        await sendEmail(formRef);
        setStatus("✅ Message sent successfully!");
        formRef.current.reset();
      } catch (err) {
        console.error("Email send error:", err);
        setError("❌ Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  return (
    <section
      className="py-20 px-4 md:px-20 bg-transparent"
      aria-label="Work together contact section"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl shadow-2xl text-white">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={TeamCollab}
            alt="Team collaborating together"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-300 mb-8 text-base md:text-lg">
            Fill out the form and I’ll get back to you within 24 hours.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
            aria-label="Contact form"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Your Name"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Your Email"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Your Message"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 w-full py-2 rounded-lg font-semibold transition duration-300 ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
              }`}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-green-300 mt-2" role="status">
                {status}
              </p>
            )}
            {error && (
              <p className="text-sm text-red-400 mt-2" role="alert">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
