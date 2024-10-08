import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import profileImage from '../assets/profile.jpg'; // Adjust the path based on your folder structure

const AboutSection = () => {
  const profileImageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration

    // Function to match the profile image height with the content height
    const adjustImageHeight = () => {
      if (profileImageRef.current && contentRef.current) {
        profileImageRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }
    };

    // Call the adjustImageHeight function on component mount and window resize
    adjustImageHeight();
    window.addEventListener('resize', adjustImageHeight);

    return () => {
      window.removeEventListener('resize', adjustImageHeight);
    };
  }, []);

  return (
    <section id="about" className="py-12 bg-white"> {/* Set background color to white */}
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-up">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <img
              src={profileImage} // Use the imported image
              alt="Profile"
              className="w-68 md:w-84 rounded-lg shadow-lg object-cover" // Make image square with width and height
              ref={profileImageRef} // Set ref for the profile image
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
          <div className="md:w-2/3 md:pl-8" ref={contentRef}>
            <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="200">
              Hello! I'm Hrushikesh Jena, a dedicated software developer with over 2 years of experience in full stack development. I specialize in building robust and scalable web applications using modern technologies.
            </p>
            <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="400">
              My expertise includes working with technologies such as React, Node.js, Express.js, and various databases. I have a passion for creating intuitive user interfaces and efficient backend systems, ensuring seamless integration and performance.
            </p>
            <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="600">
              Over the past two years, I have successfully managed and delivered several projects, collaborating with cross-functional teams and stakeholders. My goal is to continue developing innovative solutions and contributing to impactful projects.
            </p>
            <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="800">
              When I'm not coding, I enjoy staying updated with the latest tech trends, exploring new technologies, and working on personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
