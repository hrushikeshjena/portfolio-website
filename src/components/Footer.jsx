import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Hrushikesh Jena</h2>
            <p className="text-gray-400 mb-2">Full Stack Developer</p>
            <p className="text-gray-400 mb-4">Innovating with every line of code.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
                <li><a href="#resume" className="text-gray-300 hover:text-white">Resume</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://linkedin.com/in/hrushikeshjena" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.08 3H4.92A1.92 1.92 0 003 4.92v14.16A1.92 1.92 0 004.92 21h14.16A1.92 1.92 0 0021 19.08V4.92A1.92 1.92 0 0019.08 3zM8.36 18H6.73V11.6h1.63v6.4zm-.82-7.18c-.5 0-.89-.38-.89-.85s.38-.85.89-.85.89.38.89.85-.38.85-.89.85zm10.12 7.18h-1.63v-3.42c0-.82-.01-1.87-1.13-1.87-1.13 0-1.3.89-1.3 1.8v3.49h-1.63V11.6h1.57v.91h.02c.22-.42.76-.86 1.57-.86 1.68 0 1.99 1.1 1.99 2.53v3.6z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/hrushikeshjena" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3c-.8.4-1.7.7-2.6.8 1-.6 1.8-1.6 2.1-2.8-.9.5-1.8.9-2.7 1.1-.8-.8-1.9-1.3-3.1-1.3-2.4 0-4.3 1.9-4.3 4.3 0 .3.1.6.1.9-3.6-.2-6.8-1.9-8.8-4.5-.4.6-.7 1.4-.7 2.3 0 1.6.8 3.1 2 4-1-.1-2-.3-2.8-.7v.1c0 2.2 1.6 4 3.7 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.5 3.4 4.7 3.4-1.7 1.3-3.8 2-6.1 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.7 2.2 7.4 2.2 8.9 0 13.8-7.4 13.8-13.8 0-.2 0-.4-.1-.6.9-.7 1.6-1.6 2.2-2.6z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Hrushikesh Jena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
