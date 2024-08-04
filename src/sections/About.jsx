import React, { useEffect } from 'react';
import anime from 'animejs';

const AboutSection = () => {
  useEffect(() => {
    // Animation for the profile image
    anime({
      targets: '.profile-image',
      opacity: [0, 1],
      scale: [0.9, 1],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Animation for the text paragraphs
    anime({
      targets: '.about-text',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Staggered delay
      duration: 1000,
    });
  }, []);

  return (
    <section id="about" className="py-12 bg-white"> {/* Set background color to white */}
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="/path-to-your-profile-image.jpg"
              alt="Profile"
              className="profile-image w-full h-auto rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="about-text text-lg mb-4">
              Hello! I'm Hrushikesh Jena, a dedicated software developer with over 2 years of experience in full stack development. I specialize in building robust and scalable web applications using modern technologies.
            </p>
            <p className="about-text text-lg mb-4">
              My expertise includes working with technologies such as React, Node.js, Express.js, and various databases. I have a passion for creating intuitive user interfaces and efficient backend systems, ensuring seamless integration and performance.
            </p>
            <p className="about-text text-lg mb-4">
              Over the past two years, I have successfully managed and delivered several projects, collaborating with cross-functional teams and stakeholders. My goal is to continue developing innovative solutions and contributing to impactful projects.
            </p>
            <p className="about-text text-lg mb-4">
              When I'm not coding, I enjoy staying updated with the latest tech trends, exploring new technologies, and working on personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
