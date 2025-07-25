import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { FiStar } from "react-icons/fi";
import { FaRegStar, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

import profileImage from "../assets/hrushikeshjena-developer-cartoon-ai.webp";
import { cards } from "../data/constants";

// Feature card items (moved outside component for performance)
const featureItems = [
  {
    title: "Pixel Perfect",
    icon: <FiStar className="text-yellow-400 text-2xl" />,
    description: "I focus on creating aesthetically pleasing and functional designs that align with your brand's identity.",
  },
  {
    title: "High Quality",
    icon: <FaRegStar className="text-yellow-400 text-2xl" />,
    description: "I prioritize delivering top-notch, high-quality designs and solutions.",
  },
  {
    title: "Awesome Idea",
    icon: <FaLightbulb className="text-yellow-400 text-2xl" />,
    description: "My work is centered on delivering innovative and impactful ideas that truly make a difference.",
  },
];

const AboutSection = () => {
  const profileImageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();

    const adjustImageHeight = () => {
      if (profileImageRef.current && contentRef.current) {
        profileImageRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }
    };

    // Throttle function
    const throttle = (callback, delay) => {
      let timeout;
      return () => {
        if (!timeout) {
          timeout = setTimeout(() => {
            callback();
            timeout = null;
          }, delay);
        }
      };
    };

    const throttledAdjust = throttle(adjustImageHeight, 250);

    adjustImageHeight();
    window.addEventListener("resize", throttledAdjust);
    return () => window.removeEventListener("resize", throttledAdjust);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Learn more about Hrushikesh Jena, a full-stack software developer with 2+ years of experience building web and mobile applications."
        />
        <meta
          name="keywords"
          content="Hrushikesh Jena, software developer, full stack developer, React developer, Node.js developer, MERN stack"
        />
        <meta property="og:title" content="About Hrushikesh Jena" />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/hrushikeshjena-developer-cartoon-ai.webp"
        />
        <meta
          property="og:description"
          content="Meet Hrushikesh Jena, a developer passionate about crafting scalable software solutions."
        />
      </Helmet>

      <section id="about" className="py-12">
        <div className="container mx-auto px-4">
          {/* Feature Cards */}
          <div className="flex flex-wrap gap-6 justify-around mb-10">
            {featureItems.map((item, i) => (
              <div key={i} className="card">
                <span />
                <div className="content">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 rounded-full shadow-lg shadow-yellow-100 bg-black flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <p className="mb-2">{item.title}</p>
                    <p className="text-gray-100 text-xs font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section Title */}
          <h2 className="text-3xl py-6 text-white md:text-4xl font-bold text-center mb-6" data-aos="fade-up">
            Who Am I
          </h2>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Image */}
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center" ref={profileImageRef}>
              <img
                src={profileImage}
                alt="Hrushikesh Jena - Cartoon Developer"
                className="w-auto object-cover rounded-lg shadow-lg"
                data-aos="fade-right"
                loading="lazy"
                width="300"
                height="300"
              />
            </div>

            {/* Description and Motion Cards */}
            <div className="md:w-2/3 md:pl-8" ref={contentRef}>
              {[
                "Hello! I'm Hrushikesh Jena, a passionate software developer with over 2 years of experience in full-stack development. I specialize in building scalable and robust web and mobile applications using modern technologies.",
                "Over the past two years, I have delivered multiple projects, collaborating with cross-functional teams and stakeholders. I am always looking for opportunities to develop innovative solutions and contribute to meaningful projects.",
                "When I'm not coding, I love exploring the latest tech trends, learning new technologies, and working on personal projects.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-lg mb-4 text-white"
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 300}
                >
                  {text}
                </p>
              ))}

              {/* Motion Cards */}
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-6">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative w-80 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white transition-transform"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 1,
                      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl border-4 bg-gradient-to-r ${card.gradient} opacity-30 transition-opacity hover:opacity-60`}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="text-2xl mb-4">{card.icon}</div>
                      <h2 className="text-lg font-bold">{card.title}</h2>
                      <p className="text-sm mt-2 opacity-90">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
