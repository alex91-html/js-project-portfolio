import styled from "styled-components";


const ProjectButton = styled.button`
  background-color: black;
  color: #DCDCDC;
  border: 2px solid #333333;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  a {
    display: inline-flex;
    align-items:center;
    gap: 0.5rem;
  }

  img {
    filter: invert(1);
    width: 20px;
    height: 20px;
    /* padding: 0.25rem; */
  }

`;



const ProjectLink = ({ label, href, icon }) => {
  return (
    <ProjectButton>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon && icon}{label}
      </a>
    </ProjectButton>
  );
};

export default ProjectLink;