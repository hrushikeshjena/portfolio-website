import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../utils/Themes";
import InnerPageHeroSection from "../components/InnerPageHeroSection ";

import StartCanvas from "../components/canvas/Stars";
import BlogContent from "./BlogContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const Blog = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Header />
          <StartCanvas />
          <div>
            <InnerPageHeroSection
              title="Insights"
              subtitle="Learn more about our mission and values"
              imageKeyword="Insights"
            />
            <Wrapper>
              <BlogContent />
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

export default Blog;
