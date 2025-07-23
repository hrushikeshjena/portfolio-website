import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email.");
    console.log("Subscribed email:", email);
    alert("Subscribed successfully!");
    setEmail("");
  };
  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hrushikesh Jena
            </h2>
            <p className="text-blue-300 text-lg">
              Full Stack Developer & Innovator
            </p>
            <p className="text-blue-200">
              Crafting modern web experiences with passion.
            </p>
            <div>
              <h3 className="text-lg font-semibold mt-4">Follow Me</h3>
              <ul className="flex justify-center md:justify-start space-x-4 text-2xl mt-3">
                {[
                  {
                    href: "https://linkedin.com/in/hrushikeshjena",
                    icon: <FaLinkedin />,
                  },
                  {
                    href: "https://twitter.com/hrushikeshjena",
                    icon: <FaTwitter />,
                  },
                  {
                    href: "https://github.com/hrushikeshjena",
                    icon: <FaGithub />,
                  },
                  {
                    href: "mailto:contact@hrushikeshjena.info",
                    icon: <FaEnvelope />,
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-transform duration-300 hover:scale-125"
                      whileHover={{ y: -3 }}
                    >
                      {item.icon}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Blog", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-blue-300 hover:text-white transition-transform duration-200 hover:translate-x-2"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "UI/UX Design", "API Integration"].map(
                (service, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-white transition-transform duration-200 hover:translate-x-1"
                  >
                    {service}
                  </li>
                )
              )}
            </ul>
          </div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold">Let's Work Together</h3>
            <p className="text-blue-300">
              Available for freelance & remote projects.
            </p>
            <a
              href="mailto:hrushikeshjena@gmail.com"
              className="text-blue-400 hover:text-white font-semibold transition flex items-center space-x-2"
            >
              <span>Contact Me</span>
              <AiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <h3 className="text-lg font-semibold mt-6">Subscribe</h3>
            <p className="text-blue-300">
              Get updates, articles, and insights in your inbox.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center space-x-2 mt-2 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition duration-300 text-white"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="text-center mt-10 border-t border-gray-700 pt-4">
          <p className="text-blue-300">
            © {new Date().getFullYear()} Hrushikesh Jena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
