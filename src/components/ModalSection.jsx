import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaHandPointer,
} from "react-icons/fa";
import loadingImage from "../assets/Bg.png";

function ModalSection({ closeModal }) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `I'm a Full Stack Mobile and Web Applications Developer with 2 years of experience. Alongside development, I specialize in UI/UX design, WordPress, and digital marketing, helping businesses create seamless digital experiences. Beyond the tech field, I'm also a trader and investor in cryptocurrencies and stocks, using market insights to make strategic investment decisions. My diverse expertise allows me to thrive in both the tech and financial sectors.`;

  const typingSpeed = 50; // typing speed in milliseconds

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Clean up the interval on component unmount
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <img src={loadingImage} alt="Loading..." className="loading-image" />
          <div className="text-container">
            <h1 className="text-h1 first">HRUSHIKESH</h1>
            <h1 className="text-h1 second">JENA</h1>
            <p className="text-p">{displayedText}</p>
          </div>
          <svg
            onClick={closeModal}
            className="cross-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <FaHandPointer
            className="hand-press-icon press-here"
            onClick={closeModal}
          />
          <div className="social-media-container">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hrushikeshjena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSection;
