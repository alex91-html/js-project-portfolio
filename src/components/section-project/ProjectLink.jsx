import styled from "styled-components";



const ProjectButton = styled.button`
  background-color:white;
  align-items:center;
  display: flex;
  justify-content: space-between;
  color: black;
  border: solid 2px black;
  border-radius: 12px;
  padding-bottom: 0.5rem;
  padding-top: 0.4rem;
  padding-left: 1rem;
  padding-right: 6rem;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: black;
    border: solid 2px black;
    color: #FFFFFF;

    img {
      filter: invert(1);
    }

  }

  a {
    display: inline-flex;
    align-items:center;
    gap: 1.5rem;
  }

  img {
    width: 30px;
    height: 30px;
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