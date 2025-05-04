import styled from "styled-components";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Skills from "./SkillsSummery.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Friends from "./Friends.jsx";
import Tech from "./Tech.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { i } from "framer-motion/client";
import { mediaQueries } from "../../styles/media.js";



const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  ${mediaQueries.tablet} {
    gap: 3rem;
  }

`;



const AnimatedSection = styled(motion.div)`
`;

const InfoSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 }, // Start fully transparent
    visible: { opacity: 1 }, // Fade in to full opacity
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
        <Education />
      </AnimatedComponent>
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