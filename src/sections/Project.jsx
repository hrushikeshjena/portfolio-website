import React, { useEffect } from 'react';
import anime from 'animejs';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-one-image.jpg',
    liveLink: 'https://example.com/project-one',
    repoLink: 'https://github.com/username/project-one'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-two-image.jpg',
    liveLink: 'https://example.com/project-two',
    repoLink: 'https://github.com/username/project-two'
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-three-image.jpg',
    liveLink: 'https://example.com/project-three',
    repoLink: 'https://github.com/username/project-three'
  },
  {
    title: 'Project Four',
    description: 'A brief description of Project Four, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-four-image.jpg',
    liveLink: 'https://example.com/project-four',
    repoLink: 'https://github.com/username/project-four'
  },
  {
    title: 'Project Five',
    description: 'A brief description of Project Five, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-five-image.jpg',
    liveLink: 'https://example.com/project-five',
    repoLink: 'https://github.com/username/project-five'
  },
  {
    title: 'Project Six',
    description: 'A brief description of Project Six, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-six-image.jpg',
    liveLink: 'https://example.com/project-six',
    repoLink: 'https://github.com/username/project-six'
  },
  {
    title: 'Project Seven',
    description: 'A brief description of Project Seven, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-seven-image.jpg',
    liveLink: 'https://example.com/project-seven',
    repoLink: 'https://github.com/username/project-seven'
  },
  {
    title: 'Project Eight',
    description: 'A brief description of Project Eight, explaining its purpose, technology stack, and key features.',
    image: '/path-to-project-eight-image.jpg',
    liveLink: 'https://example.com/project-eight',
    repoLink: 'https://github.com/username/project-eight'
  }
];

const ProjectsSection = () => {
  useEffect(() => {
    // Animation for project cards
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
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
