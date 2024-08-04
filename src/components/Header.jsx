import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import anime from 'animejs';

const Header = () => {
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
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="hero" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer">
                Skills
              </Link>
            </li>
            <li>
              <Link to="blog" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer">
                Blog
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer">
                Services
              </Link>
            </li>
            <li>
              <Link to="products" smooth={true} duration={500} className="nav-link hover:underline cursor-pointer">
                Products
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer">
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
