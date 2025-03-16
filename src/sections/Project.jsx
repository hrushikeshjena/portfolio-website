

export default function Projects() {
  const projects = [
    {
      title: "School Management System",
      description: "A comprehensive solution for managing school operations, students, and staff.",
      image: "https://source.unsplash.com/400x300/?education,school",
      link: "#",
    },
    {
      title: "Inventory Management System",
      description: "A real-time system to track and manage inventory efficiently.",
      image: "https://source.unsplash.com/400x300/?inventory,warehouse",
      link: "#",
    },
    {
      title: "HRMS (Human Resource Management System)",
      description: "A streamlined HR management solution for businesses of all sizes.",
      image: "https://source.unsplash.com/400x300/?office,work",
      link: "#",
    },
    {
      title: "Orive Website",
      description: "A corporate website designed to showcase Orive Solutions' services.",
      image: "https://source.unsplash.com/400x300/?website,design",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 mb-8">
        Accomplishments
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Explore our innovative projects that help businesses grow and succeed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative group border border-gray-700 rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image with Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-75 transition"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 px-6 py-2 text-lg font-medium text-white bg-indigo-500 rounded-lg transition hover:bg-indigo-600 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <a 
          href="#"
          className="inline-block mt-12 px-8 py-3 text-xl font-semibold text-white border border-indigo-400 rounded-lg transition hover:bg-indigo-400 hover:text-gray-900"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
}
