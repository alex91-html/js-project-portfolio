
import React from 'react';
import Tag from "./tags";
import ActionButton from "./ActionButton";

const ProjectCard = ({ name, image, description, tags, netlify, github }) => {
  return (
    <div>
      {image && <img src={image} alt={name} />}

      <div>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

      <div>
        <ActionButton label="Live demo" href={netlify} />
        <ActionButton label="View Code" href={github} />
      </div>
    </div>
  );
};

export default ProjectCard;


