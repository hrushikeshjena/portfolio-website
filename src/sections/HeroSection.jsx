import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaConnectdevelop } from "react-icons/fa";
import HrushikeshJenaInstagram from "../assets/hrushikeshjena-instagram.png";
import HrushikeshJenaLinkedin from "../assets/hrushikeshjena-linkedin.png";
import HrushikeshJenaTwitter from "../assets/hrushikeshjena-twitter.png";
import HrushikeshJenaGithub from "../assets/hrushikeshjena-github.png";
import HrushikeshJenaTelegram from "../assets/hrushikeshjena-telegram.png";
import HrushikeshJenaFacebook from "../assets/hrushikeshjena-facebook-page.png";
import HrushikeshJenaDesign from "../assets/hrushikesh-design.png";
import HrushikeshJenaDevelop from "../assets/hrushikesh-develop.png";
import HrushikeshJenaDeploy from "../assets/hrushikesh-deploy.png";
import HrushikeshJenaResearch from "../assets/hrushikesh-research.png";
import HrushikeshJena from "../assets/hrushikeshjena.png";
import HrushikeshJenaEmoji from "../assets/Hrushikesh-Smiling-Face-With-Halo.png";
import HrushikeshJenaEmoji1 from "../assets/Hrushikesh-Smiling-Face-With-Sunglasses.png";
import HrushikeshJenaEmoji2 from "../assets/Hrushikesh-Upside-down-face-emoji.png";

function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto   px-4 py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-12 md:space-y-0">
          <div className="mx-w-lg py-6 ">
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
            <h1 className="text-4xl font-extrabold
              leading-tight">
              Hello, I'm
            </h1>
            <span className="text-gradient font-extrabold text-5xl md:text-6xl mt-2 block">
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
              delivering responsive, user-centric, and highly scalable solutions
              that seamlessly bridge innovation and functionality.
            </p>
            <ul className="mt-6 space-y-2 text-lg list-inside">
              <li className="">
                🚀 Committed to delivering scalable and user-focused solutions.
              </li>
              <li className="">
                🌟 Focused on crafting engaging and intuitive user experiences.
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
              <div className="flex justify-between  mt-6 gap-x-6">
                <img
                  src={HrushikeshJenaEmoji}
                  alt="HrushikeshJenaTelegram"
                  className="w-8 absolute mx-36 top-24"
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
                className="w-8 top-1/2 mx-[-6rem] absolute"
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
                className="w-8 absolute mx-[26rem] top-1/2 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
