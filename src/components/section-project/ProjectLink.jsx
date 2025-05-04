import styled from "styled-components";


const ProjectButton = styled.button`
  /* background-color: black; */
  background-color:white;
  align-items:center;
  display: flex;
  justify-content: space-between;
  /* text-align: left; */
  color: black;
  border: solid 2px black;
  /* padding: 0px 16px; */
  /* width: 303px; */
  /* height: 48px; */
  border-radius: 12px;
  padding-bottom: 0.5rem;
  padding-top: 0.4rem;
  padding-left: 1rem;
  padding-right: 6rem;
  cursor: pointer;
  
  &:hover {
    /* background-color:white; */
    background-color: black;
    border: solid 2px black;
    color: #FFFFFF;

    img {
      filter: invert(1);
      /* filter: none; */
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