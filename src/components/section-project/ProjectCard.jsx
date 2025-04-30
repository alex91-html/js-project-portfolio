
import React from 'react';
import Tag from "./ProjectTags.jsx";
import ProjectLink from "./ProjectLink.jsx";

const ProjectCard = ({ name, image, description, tags, netlify, github }) => {
  return (
    <div>
      {image && <img src={`/assets/${image}`} alt={name} />}

      <div>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

      <div>
        <ProjectLink label="Live demo" href={netlify} />
        <ProjectLink label="View Code" href={github} />
      </div>
    </div>
  );
};

export default ProjectCard;


