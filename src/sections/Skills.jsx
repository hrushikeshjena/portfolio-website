import { useEffect } from "react";
import anime from "animejs";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaAndroid,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiWordpress,
  SiReact as SiReactNative,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNextdotjs,
  SiPython,
  SiPhp,
  SiDjango,
  SiLaravel,
  SiGithub,
  SiAmazonaws,
  SiFigma,
  SiAdobexd,
  SiGraphql,
  SiNginx,
  SiRedux,
  SiAntdesign,
  SiBulma,
} from "react-icons/si";

// Skills organized by category
const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-yellow-500" />,
    },
    { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign className="text-4xl text-blue-500" />,
    },
    {
      name: "Material UI",
      icon: <FaDatabase className="text-4xl text-blue-500" />,
    },
    { name: "GSAP", icon: <FaDatabase className="text-4xl text-green-600" /> },
    {
      name: "Anime.js",
      icon: <FaDatabase className="text-4xl text-green-600" />,
    }, // Using GSAP icon for Anime.js
    { name: "Three.js", icon: <FaDatabase className="text-4xl text-black" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-4xl text-gray-600" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-green-700" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-4xl text-e535ab" /> },
    { name: "NGINX", icon: <SiNginx className="text-4xl text-green-500" /> },
  ],
  mobile: [
    {
      name: "React Native",
      icon: <SiReactNative className="text-4xl text-blue-600" />,
    },
  ],
  digitalMarketing: [
    { name: "SEO", icon: <FaDatabase className="text-4xl text-gray-700" /> },
    {
      name: "Social Media Managing",
      icon: <FaDatabase className="text-4xl text-gray-700" />,
    },
    {
      name: "Social Media Marketing",
      icon: <FaDatabase className="text-4xl text-gray-700" />,
    },
  ],
  uiUx: [
    { name: "Figma", icon: <SiFigma className="text-4xl text-purple-500" /> },
    {
      name: "Adobe XD",
      icon: <SiAdobexd className="text-4xl text-pink-500" />,
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop className="text-4xl text-blue-600" />,
    },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator className="text-4xl text-orange-600" />,
    },
    {
      name: "After Effects",
      icon: <FaDatabase className="text-4xl text-blue-600" />,
    },
  ],
  other: [
    { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-4xl text-black" /> },
    {
      name: "Amazon AWS",
      icon: <SiAmazonaws className="text-4xl text-orange-500" />,
    },
  ],
};

const SkillsSection = () => {
  useEffect(() => {
    // Animate skill cards on load
    anime({
      targets: ".skill-card",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      delay: anime.stagger(100), // Staggered delay
      duration: 800,
    });
  }, []);

  return (
    <section id="skills" className="py-12 ">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Skills
        </h2>

        {/* Frontend Skills */}
        {/* <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {skills.frontend.map((skill, index) => (
              <div
                key={index}
                className="skill-card  p-6 bg-transparent border-2 border-[#8913ff] text-white  rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div> */}

        {/* Backend Skills */}
        {/* <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {skills.backend.map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-transparent border-2 border-[#8913ff] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div> */}

        {/* Mobile Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Mobile Application Development
          </h3>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
            {skills.mobile.map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-transparent border-2 border-[#8913ff] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-2 gap-20">
            <div className="skill-card w-full bg-transparent border-2 border-[#8913ff] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"></div>
            <div className="skill-card w-full bg-transparent border-2 border-[#8913ff] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"></div>
          </div>
        </div>

        {/* UI/UX Skills */}
        {/* <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            UI/UX Design
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {skills.uiUx.map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-transparent border-2 border-[#8913ff] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div> */}

        {/* Other Skills */}
        {/* <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Other Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {skills.other.map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-transparent border-2 border-[#8913ff] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
