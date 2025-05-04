import styled from "styled-components";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from "../../styles/media.js";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap:4rem; 


${mediaQueries.desktop} {
  gap: 8rem;
  }
`;

const SelectedProjects = styled.div`
  display: flex;
  flex-direction: column;
 
`;

const ProjectsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title={projectsData.title} />
      <SelectedProjects>
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            reverse={index % 2 !== 0}
          />
        ))}
      </SelectedProjects>
    </SectionWrapper>
  );
};

export default ProjectsSection;