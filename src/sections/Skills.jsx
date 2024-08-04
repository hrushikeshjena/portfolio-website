import React, { useEffect } from 'react';
import anime from 'animejs';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiWordpress, SiReact as SiReactNative, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-4xl text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-4xl text-gray-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-4xl text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-500" /> },
  { name: 'Database Management', icon: <FaDatabase className="text-4xl text-purple-500" /> },
  { name: 'WordPress', icon: <SiWordpress className="text-4xl text-blue-400" /> },
  { name: 'React Native', icon: <SiReactNative className="text-4xl text-blue-600" /> },
  { name: 'UI/UX', icon: <SiAdobephotoshop className="text-4xl text-red-500" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-4xl text-blue-600" /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator className="text-4xl text-orange-600" /> },
  { name: 'Stock Trader/Investor', icon: <FaDatabase className="text-4xl text-gray-700" /> },
  { name: 'Premiere Pro', icon: <SiAdobephotoshop className="text-4xl text-yellow-500" /> },
  { name: 'Digital Marketing', icon: <FaDatabase className="text-4xl text-green-500" /> }
];

const SkillsSection = () => {
  useEffect(() => {
    // Animate skill cards on load
    anime({
      targets: '.skill-card',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Staggered delay
      duration: 800,
    });
  }, []);

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out">
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;