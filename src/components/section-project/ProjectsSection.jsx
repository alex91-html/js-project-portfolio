import React from "react";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";

const ProjectsSection = () => {
  return (
    <section>
      <h2>{projectsData.title}</h2>
      <div>
        {projectsData.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;