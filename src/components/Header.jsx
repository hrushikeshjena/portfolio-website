import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { FaPenFancy, FaLaptopCode, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    anime({
      targets: ".header-title",
      opacity: [0, 1],
      translateY: [-30, 0],
      easing: "easeOutExpo",
      duration: 1000,
    });

    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      delay: anime.stagger(100),
      duration: 1000,
    });
  }, []);

  return (
    <header className="text-black py-4 shadow-md fixed top-0 w-full z-50 bg-white" role="banner">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link to="/" className="header-title text-2xl font-bold" aria-label="Homepage">
          Hrushikesh
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          id="primary-navigation"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <li>
              <Link
                to="/#what-i-do"
                className="nav-link hover:underline flex items-center gap-2 py-2 lg:py-0"
              >
                What I Do <FaLaptopCode size={20} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                to="/#accomplishments"
                className="nav-link hover:underline flex items-center gap-2 py-2 lg:py-0"
              >
                Accomplishments <GrProjects size={18} className="mt-1" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="nav-link hover:underline flex items-center gap-2 py-2 lg:py-0"
              >
                Insights <FaPenFancy size={18} className="mt-1" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className="nav-link hover:underline flex items-center gap-2 py-2 lg:py-0"
              >
                Reach Out! <BiSolidPhoneCall size={22} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sign In / Start Button */}
        <div className="hidden lg:flex gap-4">
          <Link
            to="/signin"
            className="px-4 py-2 border border-black rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition"
            aria-label="Sign In"
          >
            Start Exploring <FaSignInAlt size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
