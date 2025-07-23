import Footer from "./Footer";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../utils/Themes";

import AboutSection from "../sections/About";
import BlogSection from "../sections/Blog";

import Header from "./Header";
import Skills from "../components/sections/Skills";
import Hero from "../components/sections/Hero";
import StartCanvas from "../components/canvas/Stars";
import Services from "../sections/WhatIDo";
import Testimonials from "../sections/Testimonials";
import CTASection from "../sections/CTASection";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Home = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Header />
          <StartCanvas />
          <div>
            <Hero />
            <AboutSection />
            <Wrapper>
              <Skills />
              <Services />
              <CTASection />
              <Testimonials />
              <BlogSection />
            </Wrapper>
            <Wrapper>
              <Footer />
            </Wrapper>
          </div>
        </Body>
      </ThemeProvider>
    </>
  );
};

export default Home;
