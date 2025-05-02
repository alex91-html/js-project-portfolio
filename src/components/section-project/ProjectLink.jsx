import styled from "styled-components";


const ProjectButton = styled.button`
  background-color: black;
  color: #DCDCDC;
  border: 2px solid #333333;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  `;



const ProjectLink = ({ label, href }) => {
  return (
    <ProjectButton>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </ProjectButton>
  );
};

export default ProjectLink;