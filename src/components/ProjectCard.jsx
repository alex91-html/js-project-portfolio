import React from 'react';

const ProjectCard = ({ name, image, tags, netlify, github }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <h3>{name}</h3>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={netlify} target="_blank" rel="noopener noreferrer">Live Site</a>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;

