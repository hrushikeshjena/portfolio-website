import React, { useEffect } from 'react';
import anime from 'animejs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const projects = [
  {
    title: 'Inventory Management System',
    description: 'A comprehensive inventory management system built using the MERN stack. Features include stock tracking, order management, and real-time analytics.',
    image: '/path-to-your-inventory-management-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/inventory-management', // Replace with actual live demo link
    repoLink: 'https://github.com/username/inventory-management' // Replace with actual GitHub repo link
  },
  {
    title: 'Human Resource Management System',
    description: 'A full-fledged HRMS application developed using Java Spring Boot and React, aimed at streamlining HR processes such as employee management and performance tracking.',
    image: '/path-to-your-hrms-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/hrms', // Replace with actual live demo link
    repoLink: 'https://github.com/username/hrms' // Replace with actual GitHub repo link
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and experience, built using React and styled-components for a clean and responsive design.',
    image: '/path-to-your-portfolio-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/portfolio', // Replace with actual live demo link
    repoLink: 'https://github.com/username/portfolio' // Replace with actual GitHub repo link
  },
  {
    title: 'School Management System',
    description: 'A school management system designed to manage classes, students, and faculty. Built with the MERN stack, it also features an admin panel for easy management.',
    image: '/path-to-your-school-management-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/school-management', // Replace with actual live demo link
    repoLink: 'https://github.com/username/school-management' // Replace with actual GitHub repo link
  },
  {
    title: 'E-commerce Application',
    description: 'An e-commerce application built with React and Node.js, featuring product browsing, shopping cart, and checkout functionalities integrated with Stripe for payments.',
    image: '/path-to-your-ecommerce-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/ecommerce', // Replace with actual live demo link
    repoLink: 'https://github.com/username/ecommerce' // Replace with actual GitHub repo link
  },
  {
    title: 'Task Management Tool',
    description: 'A task management tool built using React and Node.js. It includes task assignment, tracking, and collaborative features for team productivity.',
    image: '/path-to-your-task-management-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/task-management', // Replace with actual live demo link
    repoLink: 'https://github.com/username/task-management' // Replace with actual GitHub repo link
  },
  {
    title: 'Blog Platform',
    description: 'A dynamic blog platform developed using Next.js and MongoDB. It supports user authentication, post creation, and comments.',
    image: '/path-to-your-blog-platform-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/blog-platform', // Replace with actual live demo link
    repoLink: 'https://github.com/username/blog-platform' // Replace with actual GitHub repo link
  },
  {
    title: 'Weather App',
    description: 'A weather application that fetches real-time weather data using the OpenWeather API and provides users with a forecast based on their location.',
    image: '/path-to-your-weather-app-image.jpg', // Replace with actual image path
    liveLink: 'https://example.com/weather-app', // Replace with actual live demo link
    repoLink: 'https://github.com/username/weather-app' // Replace with actual GitHub repo link
  }
];

const ProjectsSection = () => {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Only animate once while scrolling down
    });

    // Animation for project cards with Anime.js
    anime({
      targets: '.project-card',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Staggered delay for each card
      duration: 800,
    });
  }, []);

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-up">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                <div className="flex space-x-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded text-xs transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-1 px-2 rounded text-xs transition duration-300"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
