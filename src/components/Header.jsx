import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import anime from 'animejs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Animation for the header title
    anime({
      targets: '.header-title',
      opacity: [0, 1],
      translateY: [-30, 0],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Animation for the navigation links
    anime({
      targets: '.nav-link',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Staggered delay
      duration: 1000,
    });
  }, []);

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="header-title text-2xl font-bold">Hrushikesh Jena</h1>
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto`}>
          <ul className="lg:flex lg:space-x-4 lg:items-center">
            <li>
              <Link to="hero" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer block py-2 lg:py-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer block py-2 lg:py-0">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer block py-2 lg:py-0">
                Projects
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer block py-2 lg:py-0">
                Skills
              </Link>
            </li>
            <li>
              <Link to="blog" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer block py-2 lg:py-0">
                Blog
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer block py-2 lg:py-0">
                Services
              </Link>
            </li>
            <li>
              <Link to="products" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer block py-2 lg:py-0">
                Products
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer block lg:inline-block">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
