import React, { Suspense } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import { FaConnectdevelop } from "react-icons/fa";

import HrushikeshJenaInstagram from "../../assets/hrushikeshjena-instagram.webp";
import HrushikeshJenaLinkedin from "../../assets/hrushikeshjena-linkedin.png";
import HrushikeshJenaTwitter from "../../assets/hrushikeshjena-twitter.webp";
import HrushikeshJenaGithub from "../../assets/hrushikeshjena-github.webp";
import HrushikeshJenaTelegram from "../../assets/hrushikeshjena-telegram.webp";
import HrushikeshJenaFacebook from "../../assets/hrushikeshjena-facebook-page.webp";
import HrushikeshJenaDesign from "../../assets/hrushikesh-design.webp";
import HrushikeshJenaDevelop from "../../assets/hrushikesh-develop.webp";
import HrushikeshJenaDeploy from "../../assets/hrushikesh-deploy.webp";
import HrushikeshJenaResearch from "../../assets/hrushikesh-research.webp";
import HrushikeshJena from "../../assets/hrushikeshjena.webp";
import HrushikeshJenaEmoji from "../../assets/Hrushikesh-Smiling-Face-With-Halo.webp";
import HrushikeshJenaEmoji1 from "../../assets/Hrushikesh-Smiling-Face-With-Sunglasses.webp";

const HeroBgAnimation = React.lazy(() =>
  import("../HeroBgAnimation/HeroBgAnimation")
);
const StarCanvas = React.lazy(() => import("../canvas/Stars"));

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 0;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  transform: translate(-50%, -50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Hrushikesh Jena | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Hrushikesh Jena - Full Stack Developer with expertise in scalable web and mobile applications."
        />
        <meta
          name="keywords"
          content="Hrushikesh Jena, Full Stack Developer, Software Engineer, MERN Developer, UX/UI Designer, Portfolio"
        />
        <meta
          property="og:title"
          content="Hrushikesh Jena | Full Stack Developer"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/hrushikeshjena.png"
        />
        <meta
          property="og:description"
          content="Experienced Full Stack Developer creating user-centric web and mobile apps."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section id="About" className="py-12">
        <HeroContainer>
          <HeroBg>
            <Suspense fallback={<div>Loading Stars...</div>}>
              <StarCanvas />
              <HeroBgAnimation />
            </Suspense>
          </HeroBg>

          <section className="container mx-auto px-2 py-6 text-white">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between space-y-12 md:space-y-0">
              {/* Text Content */}
              <div className="md:w-1/2 text-left">
                <h1 className="text-4xl font-extrabold leading-tight">
                  Hello, I'm
                </h1>
                <span className="text-gradient1 font-extrabold text-5xl md:text-6xl mt-2 block">
                  Hrushikesh
                </span>

                <h2 className="text-xl flex gap-3 font-medium mt-4">
                  A Passionate{" "}
                  <span className="bg-gradient-to-r from-[#3d77ff] to-[#8913ff] bg-clip-text text-transparent">
                    <Typewriter
                      options={{
                        strings: [
                          "Full Stack Developer",
                          "Software Engineer",
                          "Tech Enthusiast",
                          "Entrepreneur",
                          "UX/UI Designer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}
                    />
                  </span>{" "}
                  from India
                </h2>

                <p className="mt-6 text-lg leading-relaxed max-w-xl">
                  I bring over 2 years of experience in designing and developing
                  cutting-edge mobile and web applications. My focus is on
                  delivering responsive, user-centric, and highly scalable
                  solutions that seamlessly bridge innovation and functionality.
                </p>

                <ul className="mt-6 space-y-2 text-lg list-inside">
                  <li>
                    🚀 Committed to delivering scalable and user-focused
                    solutions.
                  </li>
                  <li>
                    🌟 Focused on crafting engaging and intuitive user
                    experiences.
                  </li>
                  <li>📚 Committed to continuous learning and development.</li>
                </ul>

                <div className="container-eg-btn-4 mt-10 uf-border">
                  <a
                    className="button button-8 flex items-center justify-center gap-2"
                    role="button"
                  >
                    <FaConnectdevelop className="text-2xl font-bold" />
                    Connect With Me!
                  </a>
                </div>
              </div>

              {/* Right Side Image Section */}
              <div className="md:w-2/5 flex justify-center">
                <div>
                  {/* Top Emojis */}
                  <div className="flex justify-between mt-6 gap-x-6">
                    <img
                      src={HrushikeshJenaEmoji}
                      alt="Emoji Halo"
                      className="w-8 absolute mx-36 hidden lg:block top-24"
                      loading="lazy"
                    />
                    {[HrushikeshJenaResearch, HrushikeshJenaDesign].map(
                      (img, i) => (
                        <div
                          key={i}
                          className={`w-14 h-14 rounded-lg shadow-lg bg-white shadow-${
                            i === 0 ? "[#EA5181]" : "[#51EA9D]"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Icon ${i}`}
                            className="w-full px-2 py-2"
                            loading="lazy"
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Main Avatar */}
                  <img
                    src={HrushikeshJenaEmoji}
                    alt="Emoji"
                    className="w-8 top-1/2 mx-[-6rem] hidden lg:block absolute"
                    loading="lazy"
                  />

                  <div className="w-72 mx-8 h-72 border-4 shadow-2xl shadow-[#51C6EA] my-10 bg-white rounded-full">
                    <img
                      src={HrushikeshJena}
                      alt="Hrushikesh Jena"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom Skills */}
                  <div className="flex justify-between gap-x-6">
                    {[HrushikeshJenaDevelop, HrushikeshJenaDeploy].map(
                      (img, i) => (
                        <div
                          key={i}
                          className={`w-14 h-14 rounded-lg shadow-lg bg-white shadow-${
                            i === 0 ? "[#EA51EA]" : "[#DDEA51]"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Skill ${i}`}
                            className="w-full px-2 py-2"
                            loading="lazy"
                          />
                        </div>
                      )
                    )}
                  </div>

                  <img
                    src={HrushikeshJenaEmoji1}
                    alt="Emoji Cool"
                    className="w-8 absolute mx-[26rem] hidden lg:block top-1/2"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </HeroContainer>
      </section>
    </>
  );
};

export default React.memo(Hero);
