import React, { useEffect } from 'react';
import anime from 'animejs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResumeSection = () => {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Only animate once while scrolling down
    });

    // Anime.js animation for the section
    anime({
      targets: '.resume-section *', // Target all elements within the section
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(100), // Staggered delay for each element
    });
  }, []);

  return (
    <section id="resume" className="py-12 bg-white resume-section">
      <div className="container mx-auto px-6 md:px-12 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Resume/CV</h2>
        <p className="text-lg mb-6">
          Download or view my resume to learn more about my professional background, skills, and experience.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/Resume of Hrushikesh Jena.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="/Resume of Hrushikesh Jena.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
