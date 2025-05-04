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

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const AnimatedSection = styled(motion.div)`
`;

const InfoSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const AnimatedComponent = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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