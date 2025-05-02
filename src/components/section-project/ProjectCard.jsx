import styled from "styled-components";
import { mediaQueries } from "../../styles/media";
import Tag from "./Tags.jsx";
import ProjectLink from "./ProjectLink.jsx";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 128px;

  ${mediaQueries.desktop} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")}; 
    align-items: flex-start;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;

  ${mediaQueries.desktop} {
    width: 50%;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  /* ${mediaQueries.tablet} {
    flex-direction: row;
    gap: 2rem;
  } */
`;

const ProjectCard = ({ name, image, description, tags, netlify, github, reverse }) => {
  return (
    <CardWrapper $reverse={reverse}>
      {image && <Image src={`/assets/${image}`} alt={name} />}
      <Content>
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
      </Content>
    </CardWrapper>
  );
};

export default ProjectCard;