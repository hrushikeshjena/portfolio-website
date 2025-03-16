import { MdMobileFriendly } from "react-icons/md";
import { FaGlobe, FaPaintBrush } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and high-performance web applications using modern frameworks.",
      icon: <FaGlobe className="text-5xl text-indigo-400" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly interfaces for web and mobile applications.",
      icon: <FaPaintBrush className="text-5xl text-pink-400" />,
    },
    {
      title: "Mobile App Development",
      description: "Building high-performance mobile apps with seamless user experiences.",
      icon: <MdMobileFriendly className="text-5xl text-green-400" />,
    },
  ];

  return (
    <section className="py-16  text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 tracking-wide text-indigo-300">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 border border-gray-700 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500"
            >
              <div className="text-5xl mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <button className="mt-6 px-5 py-2 border border-indigo-400 text-indigo-400 rounded-lg transition-all duration-300 hover:bg-indigo-400 hover:text-white">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
