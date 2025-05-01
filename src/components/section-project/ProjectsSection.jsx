import styled from "styled-components";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from '../../styles/media';

const SectionWrapper = styled.section``;
const SelectedProjects = styled.div`
display:flex;
flex-direction: column;
/* align-items: center; */
gap: 1.5rem;
`;



const ProjectsSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title={projectsData.title} />
      <SelectedProjects>
        {projectsData.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SelectedProjects>
    </SectionWrapper>
  );
};

export default ProjectsSection;