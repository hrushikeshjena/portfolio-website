import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiAdobexd,
  SiGithub,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiAntdesign,
} from "react-icons/si";

// Importing images
import img1 from "../assets/hrushikeshjena-clients1.png";
import img2 from "../assets/hrushikeshjena-clients2.png";
import img3 from "../assets/hrushikeshjena-clients3.png";

// Developer Skills Data
export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
      { name: "Ant Design", icon: <SiAntdesign className="text-4xl text-blue-500" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-700" /> },
      { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-500" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-4xl text-pink-500" /> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "AWS", icon: <FaDatabase className="text-4xl text-orange-500" /> },
      { name: "Docker", icon: <SiDocker className="text-4xl text-blue-500" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-4xl text-red-500" /> },
      { name: "Nginx", icon: <FaDatabase className="text-4xl text-green-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-4xl text-blue-600" /> },
      { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-4xl text-black" /> },
    ],
  },
  {
    title: "UX/UI",
    skills: [
      { name: "Figma", icon: <SiFigma className="text-4xl text-purple-500" /> },
      { name: "Adobe XD", icon: <SiAdobexd className="text-4xl text-pink-500" /> },
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-4xl text-blue-600" /> },
      { name: "Illustrator", icon: <SiAdobeillustrator className="text-4xl text-orange-600" /> },
      { name: "After Effects", icon: <FaDatabase className="text-4xl text-blue-600" /> }, // Consider using the real After Effects icon
    ],
  },
];

// Cards for features or highlights
export const cards = [
  {
    title: "Hyper-Personalized AI",
    description: "AI is now more intuitive than ever, offering personalized experiences in real time.",
    icon: "🧠",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Quantum Computing Revolution",
    description: "Quantum computing is reshaping industries with its unparalleled processing power.",
    icon: "⚛️",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Next-Gen Mobile Apps",
    description: "Mobile applications are evolving with AI-driven UX, AR integration, and lightning-fast performance.",
    icon: "📱",
    gradient: "from-green-500 to-teal-600",
  },
];

// Client Testimonials
export const testimonials = [
  {
    name: "Emily Carter",
    position: "Product Manager at TechFlow",
    feedback: "Hrushikesh is an exceptional developer! His problem-solving skills and attention to detail made our project a success. Highly recommended!",
    rating: 5,
    image: img1,
  },
  {
    name: "Daniel Wilson",
    position: "CTO at InnovateX",
    feedback: "Working with Hrushikesh was a fantastic experience. His expertise in React and backend development helped streamline our app significantly.",
    rating: 5,
    image: img2,
  },
  {
    name: "Sophia Lee",
    position: "Founder at Creative Minds",
    feedback: "A true professional! Hrushikesh understands the requirements deeply and delivers top-notch solutions with a great user experience.",
    rating: 5,
    image: img3,
  },
];
