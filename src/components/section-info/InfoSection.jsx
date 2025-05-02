import styled from "styled-components";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Skills from "./SkillsSummery.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Friends from "./Friends.jsx";
import Tech from "./Tech.jsx";

const SectionWrapper = styled.section``;


const InfoSection = () => {
  return (
    <SectionWrapper id="info-section">
      <About />
      <Services />
      <Tech />
      <Skills />
      <Education />
      <Contact />
      <Friends />
    </SectionWrapper>
  );
};

export default InfoSection;