import { sendEmail } from "../utils/email";
import {useRef,useState} from "react";
const CTASection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await sendEmail(formRef);
      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-transparent">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 p-10 rounded-3xl shadow-2xl  text-white">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-8225275-6592639.png"
            alt="Contact Illustration"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-200 mb-8 text-base md:text-lg">
            Fill out the form and I’ll get back to you within 24 hours.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-indigo-700 font-semibold py-3 rounded-xl hover:bg-indigo-100 transition duration-300"
            >
              Send Message
            </button>
            <p className="text-sm text-green-300 mt-2">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
