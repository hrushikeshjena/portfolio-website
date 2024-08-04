import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // For form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would usually send formData to your server
    try {
      // Mock submission
      console.log('Form data submitted:', formData);
      setFormStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Contact Form */}
          <div className="md:w-1/2 bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
            {formStatus === 'success' && (
              <p className="text-green-600 mb-4">Your message has been sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 mb-4">There was an error sending your message. Please try again.</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Details */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">Contact Details</h3>
            <p className="text-gray-200 mb-6">Feel free to reach out through the following channels:</p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-300 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1-6H11v-6h2v6z"/>
                </svg>
                <a href="mailto:hrushikesh.jena@example.com" className="text-blue-200 hover:text-white">
                  hrushikesh.jena@example.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-300 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 11V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6M21 13V7m0 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7M21 11H3"/>
                </svg>
                <a href="https://linkedin.com/in/hrushikeshjena" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-300 mr-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23 3c-.8.4-1.7.7-2.6.8 1-.6 1.8-1.6 2.1-2.8-.9.5-1.8.9-2.7 1.1-.8-.8-1.9-1.3-3.1-1.3-2.4 0-4.3 1.9-4.3 4.3 0 .3.1.6.1.9-3.6-.2-6.8-1.9-8.8-4.5-.4.6-.7 1.4-.7 2.3 0 1.6.8 3.1 2 4-1-.1-2-.3-2.8-.7v.1c0 2.2 1.6 4 3.7 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.5 3.4 4.7 3.4-1.7 1.3-3.8 2-6.1 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.7 2.2 7.4 2.2 8.9 0 13.8-7.4 13.8-13.8 0-.2 0-.4-.1-.6.9-.7 1.6-1.6 2.2-2.6z"/>
                </svg>
                <a href="https://twitter.com/hrushikeshjena" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                  Twitter
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
