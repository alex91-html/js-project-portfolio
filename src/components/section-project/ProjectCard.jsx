
import styled from "styled-components";
import Tag from "./ProjectTags.jsx";
import ProjectLink from "./ProjectLink.jsx";






const ProjectCard = ({ name, image, description, tags, netlify, github }) => {
  return (
    <CardWrapper>
      {image && <Image src={`/assets/${image}`} alt={name} />}

      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </TagContainer>

      <Title>{name}</Title>

      <Description>{description}</Description>

      <LinksContainer>
        <ProjectLink label="Live demo" href={netlify} />
        <ProjectLink label="View Code" href={github} />
      </LinksContainer>
    </CardWrapper>
  );
};

export default ProjectCard;


