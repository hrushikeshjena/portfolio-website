import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import { Link } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";
import HrushikeshJenaInstagram from "../../assets/hrushikeshjena-instagram.png";
import HrushikeshJenaLinkedin from "../../assets/hrushikeshjena-linkedin.png";
import HrushikeshJenaTwitter from "../../assets/hrushikeshjena-twitter.png";
import HrushikeshJenaGithub from "../../assets/hrushikeshjena-github.png";
import HrushikeshJenaTelegram from "../../assets/hrushikeshjena-telegram.png";
import HrushikeshJenaFacebook from "../../assets/hrushikeshjena-facebook-page.png";
import HrushikeshJenaDesign from "../../assets/hrushikesh-design.png";
import HrushikeshJenaDevelop from "../../assets/hrushikesh-develop.png";
import HrushikeshJenaDeploy from "../../assets/hrushikesh-deploy.png";
import HrushikeshJenaResearch from "../../assets/hrushikesh-research.png";
import HrushikeshJena from "../../assets/hrushikeshjena.png";
import HrushikeshJenaEmoji from "../../assets/Hrushikesh-Smiling-Face-With-Halo.png";
import HrushikeshJenaEmoji1 from "../../assets/Hrushikesh-Smiling-Face-With-Sunglasses.png";
import HrushikeshJenaEmoji2 from "../../assets/Hrushikesh-Upside-down-face-emoji.png";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 0;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
  return (
    <div id="About" className="py-12">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <section className="container mx-auto px-2 py-6 text-white">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between space-y-12 md:space-y-0">
            <div className="mx-w-lg py-6 hidden lg:display-block">
              <img
                src={HrushikeshJenaInstagram}
                alt="HrushikeshJenaInstagram"
                className="w-20 cursor-pointer"
              />
              <img
                src={HrushikeshJenaLinkedin}
                alt="HrushikeshJenaLinkedin"
                className="w-20"
              />
              <img
                src={HrushikeshJenaTwitter}
                alt="HrushikeshJenaTwitter"
                className="w-20"
              />
              <img
                src={HrushikeshJenaGithub}
                alt="HrushikeshJenaGithub"
                className="w-20"
              />
              <img
                src={HrushikeshJenaTelegram}
                alt="HrushikeshJenaTelegram"
                className="w-20"
              />
              <img
                src={HrushikeshJenaFacebook}
                alt="HrushikeshJenaFacebook"
                className="w-20"
              />
            </div>

            <div className="md:w-1/2 text-left">
              <h1 className="text-4xl font-extrabold  leading-tight">
                Hello, I'm
              </h1>
              <span className="text-gradient1 font-extrabold text-5xl md:text-6xl mt-2 block">
                Hrushikesh
              </span>

              <h5 className="text-xl flex gap-3 font-medium mt-4 ">
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
                      delay: 75, // Typing speed
                    }}
                  />
                </span>{" "}
                from India
              </h5>

              <p className="mt-6 text-lg leading-relaxed max-w-xl">
                I bring over 2 years of experience in designing and developing
                cutting-edge mobile and web applications. My focus is on
                delivering responsive, user-centric, and highly scalable
                solutions that seamlessly bridge innovation and functionality.
              </p>
              <ul className="mt-6 space-y-2 text-lg list-inside">
                <li className="">
                  🚀 Committed to delivering scalable and user-focused
                  solutions.
                </li>
                <li className="">
                  🌟 Focused on crafting engaging and intuitive user
                  experiences.
                </li>
                <li className="">
                  📚 Committed to continuous learning and development.
                </li>
              </ul>
              <div>
                <div className="container-eg-btn-4 mt-10 uf-border">
                  <a className="button button-8 flex items-center justify-center gap-2">
                    <FaConnectdevelop className="text-2xl font-bold" />
                    Connect With Me!
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-2/5 flex justify-center">
              <div>
                <div className="flex justify-between mt-6 gap-x-6">
                  <img
                    src={HrushikeshJenaEmoji}
                    alt="HrushikeshJenaTelegram"
                    className="w-8 absolute mx-36 hidden lg:display-block top-24"
                  />
                  <div className="w-14 h-14  rounded-lg shadow-lg bg-white shadow-[#EA5181]">
                    <img
                      src={HrushikeshJenaResearch}
                      alt="HrushikeshJenaDesigner"
                      className="w-full px-2 py-2"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-lg shadow-lg bg-white shadow-[#51EA9D]">
                    <img
                      src={HrushikeshJenaDesign}
                      alt="HrushikeshJenaDeveloper"
                      className="w-full px-2 py-2"
                    />
                  </div>
                </div>

                <img
                  src={HrushikeshJenaEmoji}
                  alt="HrushikeshJenaEmoji"
                  className="w-8 top-1/2 mx-[-6rem] hidden lg:display-block absolute"
                />

                <div className="w-72 mx-8 h-72 border-4 shadow-2xl shadow-[#51C6EA] my-10 bg-white rounded-full">
                  <img
                    src={HrushikeshJena}
                    alt="HrushikeshJena"
                    className="w-full"
                  />
                </div>

                <div className="flex justify-between gap-x-6">
                  <div className="w-14 h-14 rounded-lg shadow-lg bg-white shadow-[#EA51EA]">
                    <img
                      src={HrushikeshJenaDevelop}
                      alt="HrushikeshJenaDeveloper"
                      className="w-full px-2 py-2"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-lg shadow-lg bg-white shadow-[#DDEA51]">
                    <img
                      src={HrushikeshJenaDeploy}
                      alt="HrushikeshJenaDeveloper"
                      className="w-full px-2 py-2"
                    />
                  </div>
                </div>

                <img
                  src={HrushikeshJenaEmoji1}
                  alt="HrushikeshJenaTelegram"
                  className="w-8 absolute mx-[26rem] hidden lg:display-block top-1/2 "
                />
              </div>
            </div>
          </div>
        </section>
      </HeroContainer>
    </div>
  );
};

export default Hero;
