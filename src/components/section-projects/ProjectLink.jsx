import React from 'react';

const ProjectLink = ({ lable, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {lable}
    </a>
  );
};

export default ProjectLink;