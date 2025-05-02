import styled from "styled-components";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Skills from "./SkillsSummery.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Friends from "./Friends.jsx";

const SectionWrapper = styled.div``;


const InfoSection = () => {
  return (
    <SectionWrapper id="info-section">
      <About />
      <Services />
      <Skills />
      <Education />
      <Contact />
      <Friends />
    </SectionWrapper>
  );
};

export default InfoSection;