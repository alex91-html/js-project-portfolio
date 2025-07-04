import styled from "styled-components";
import About from "./About.jsx";
// import Services from "./Services.jsx";
import Skills from "./SkillsSummery.jsx";
import Studies from "./Studies.jsx";
import Contact from "./Contact.jsx";
import Friends from "./Friends.jsx";
import Tech from "./Tech.jsx";
import Clients from "./Clients.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mediaQueries } from "../../styles/media.js";



const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  ${mediaQueries.tablet} {
    gap: 3rem;
  }

    ${mediaQueries.desktop} { 
  max-width: 70%;
}
`;



const AnimatedSection = styled(motion.div)`
`;

const InfoSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const AnimatedComponent = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <AnimatedSection
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        {children}
      </AnimatedSection>
    );
  };

  return (
    <SectionWrapper id="info-section">
      <AnimatedComponent>
        <About />
      </AnimatedComponent>
      {/* <AnimatedComponent>
        <Services />
      </AnimatedComponent> */}
      <AnimatedComponent>
        <Tech />
      </AnimatedComponent>
      <AnimatedComponent>
        <Skills />
      </AnimatedComponent>
      <AnimatedComponent>
        <Clients />
      </AnimatedComponent>

      <Studies />

      <AnimatedComponent>
        <Contact />
      </AnimatedComponent>
      <AnimatedComponent>
        <Friends />
      </AnimatedComponent>
    </SectionWrapper>
  );
};

export default InfoSection;