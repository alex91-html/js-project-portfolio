import styled from "styled-components";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";
import SectionTitle from "../common/SectionTitle.jsx";

const SectionWrapper = styled.section`
`;

const SelectedProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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