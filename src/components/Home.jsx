import Footer from "./Footer";
import AboutSection from "../sections/About";
import BlogSection from "../sections/Blog";
import ContactSection from "../sections/Contact";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/Project";
import ResumeSection from "../sections/Resume";
import SkillsSection from "../sections/Skills";
import TestimonialsSection from "../sections/Testimonials";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ResumeSection/>
      <ProjectsSection/>
      <BlogSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
      
    </>
  );
}

export default Home;
