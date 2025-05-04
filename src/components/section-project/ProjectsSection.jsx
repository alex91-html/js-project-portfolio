import styled from "styled-components";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from "../../styles/media.js";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const SelectedProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${mediaQueries.desktop} {
    gap: 8rem;
  }
`;

const AnimatedProject = styled(motion.div)``;

const ProjectsSection = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const AnimatedComponent = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <AnimatedProject
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={projectVariants}
        transition={{ duration: 0.8 }}
      >
        {children}
      </AnimatedProject>
    );
  };

  return (
    <SectionWrapper>
      <AnimatedComponent>
        <SectionTitle title={projectsData.title} />
      </AnimatedComponent>
      <SelectedProjects>
        {projectsData.projects.map((project, index) => (
          <AnimatedComponent key={index}>
            <ProjectCard {...project} reverse={index % 2 !== 0} />
          </AnimatedComponent>
        ))}
      </SelectedProjects>
    </SectionWrapper>
  );
};

export default ProjectsSection;