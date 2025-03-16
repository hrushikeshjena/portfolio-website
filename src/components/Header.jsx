import React, { useEffect, useState } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { FaPenFancy, FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { FaLaptopCode, FaSignInAlt } from "react-icons/fa";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Animation for the header title
    anime({
      targets: ".header-title",
      opacity: [0, 1],
      translateY: [-30, 0],
      easing: "easeOutExpo",
      duration: 1000,
    });

    // Animation for the navigation links
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
    <header className="text-black  py-4 shadow-md fixed top-0 w-full z-50 bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Home Link */}
        <Link to="/" className="header-title text-2xl font-bold">
          Hrushikesh
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <li>
              <Link
                to="/#"
                className="nav-link hover:underline flex justify-between align-middle gap-3 cursor-pointer block py-2 lg:py-0"
              >
                What I Do <FaLaptopCode size={24} className="" />
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                className="nav-link hover:underline flex justify-between align-middle gap-3 cursor-pointer block py-2 lg:py-0"
              >
                Accomplishments <GrProjects size={18} className="mt-1" />
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                className="nav-link hover:underline flex justify-between align-middle gap-3 cursor-pointer block py-2 lg:py-0"
              >
                Insights <FaPenFancy size={18} className="mt-1" />
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                className="nav-link hover:underline cursor-pointer flex gap-3 justify-between align-middle block py-2 lg:py-0"
              >
                Reach Out! <BiSolidPhoneCall size={22} />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sign In/Sign Up Buttons */}
        <div className="hidden lg:flex gap-4">
          <Link
            to="/signin"
            className="px-4 py-2 border border-black rounded-md flex gap-3 justify-between align-middle hover:bg-black hover:text-white transition"
          >
            Start Exploring <FaSignInAlt size={18} className="mt-1" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
