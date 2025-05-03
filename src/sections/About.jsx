import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles import
import { FiStar } from "react-icons/fi";
import { FaRegStar, FaLightbulb } from "react-icons/fa"; // Import additional icons
import profileImage from "../assets/hrushikeshjena-developer-cartoon-ai.png";
import { motion } from "framer-motion";
import { cards } from "../data/constants";

const AboutSection = () => {
  const profileImageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration

    // Function to match the height of profile image with content
    const adjustImageHeight = () => {
      if (profileImageRef.current && contentRef.current) {
        profileImageRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }
    };

    // Adjust image height on component mount and window resize
    adjustImageHeight();
    window.addEventListener("resize", adjustImageHeight);

    return () => {
      window.removeEventListener("resize", adjustImageHeight);
    };
  }, []);

  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        {/* <EarthCanvas /> */}

        <div className="flex flex-wrap gap-6 justify-around mb-10">
          <div className="card">
            <span />
            <div className="content">
              <div className="text-center">
                <div className="flex justify-center items-center">
                  <div className="w-12 h-12 rounded-full shadow-lg shadow-yellow-100 bg-black flex items-center justify-center">
                    <FiStar className="text-yellow-400 text-2xl" />
                  </div>
                </div>
                <p className="mb-2">Pixel Perfect</p>
                <p className="text-gray-100 text-xs font-light">
                  I focus on creating aesthetically pleasing and functional
                  designs that align with your brand's identity.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <span />
            <div className="content">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full shadow-lg shadow-yellow-100 bg-black flex items-center justify-center">
                    <FaRegStar className="text-yellow-400 text-2xl" />{" "}
                    {/* Added icon */}
                  </div>
                </div>
                <p className="mb-2">High Quality</p>
                <p className="text-gray-100 text-xs font-light">
                  I prioritize delivering top-notch, high-quality designs and
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <span />
            <div className="content">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full shadow-lg shadow-yellow-100 bg-black flex items-center justify-center">
                    <FaLightbulb className="text-yellow-400 text-2xl" />{" "}
                    {/* Added icon */}
                  </div>
                </div>
                <p className="mb-2">Awesome Idea</p>
                <p className="text-gray-100 text-xs font-light">
                  My work is centered on delivering innovative and impactful
                  ideas that truly make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2
          className="text-3xl py-6 text-white md:text-4xl font-bold text-center mb-6"
          data-aos="fade-up"
        >
          Who Am I
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Section (Image) */}
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <img
              src={profileImage}
              alt="Hrushikesh Jena"
              className="w-auto object-cover rounded-lg shadow-lg"
              data-aos="fade-right"
            />
          </div>

          {/* Right Section (Content) */}
          <div className="md:w-2/3 md:pl-8" ref={contentRef}>
            <p
              className="text-lg mb-4 text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hello! I'm Hrushikesh Jena, a passionate software developer with
              over 2 years of experience in full-stack development. I specialize
              in building scalable and robust web and mobile applications using
              modern technologies.
            </p>
            <p
              className="text-lg mb-4 text-white"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Over the past two years, I have delivered multiple projects,
              collaborating with cross-functional teams and stakeholders. I am
              always looking for opportunities to develop innovative solutions
              and contribute to meaningful projects.
            </p>

            <p
              className="text-lg mb-4 text-white"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              When I'm not coding, I love exploring the latest tech trends,
              learning new technologies, and working on personal projects.
            </p>
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
                  {/* Border Animation */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-4 bg-gradient-to-r ${card.gradient} opacity-30 transition-opacity hover:opacity-60`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-2xl mb-4">{card.icon}</div>
                    <h2 className="text-lg font-bold">{card.title}</h2>
                    <p className="text-sm mt-2 opacity-90">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
