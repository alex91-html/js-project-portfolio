import React from 'react';

const ProjectLink = ({ label, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default ProjectLink;