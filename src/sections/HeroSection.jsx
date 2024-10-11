

import React, { useEffect } from 'react';
import anime from 'animejs';

const HeroSection = () => {
  useEffect(() => {
    // Animation for the heading
    anime({
      targets: '.hero-heading',
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Animation for the subtitle
    anime({
      targets: '.hero-subtitle',
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutExpo',
      delay: 500,
      duration: 1000,
    });

    // Animation for the button
    anime({
      targets: '.hero-button',
      opacity: [0, 1],
      scale: [0.9, 1],
      easing: 'easeOutExpo',
      delay: 1000,
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source
          src="https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 md:opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 py-16 md:px-12 md:py-24">
        {/* Title */}
        <h1 className="hero-heading text-3xl md:text-5xl font-bold mb-4 sm:text-4xl">
          Hi, I'm Hrushikesh Jena
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-base md:text-2xl mb-6 sm:text-lg">
          A passionate software developer specializing in creating innovative solutions.
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="hero-button inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg shadow-lg text-sm md:text-base"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
