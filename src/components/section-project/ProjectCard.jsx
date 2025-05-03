import styled from "styled-components";
import { mediaQueries } from "../../styles/media";
import Tag from "./Tags.jsx";
import ProjectLink from "./ProjectLink.jsx";
import LiveDemoIcon from "../../assets/icons/live-demo.svg";
import ViewCodeIcon from "../../assets/icons/view-code.svg";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 128px;
  gap: 64px;
  
  ${mediaQueries.desktop} {
    gap: 125px;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")}; 
    align-items: flex-start;
  }
`;


const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ;`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mediaQueries.desktop} {
    flex-direction: column;
    gap: 1.5rem;
    /* max-width: 680px; */

  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 54.6px -8px rgba(0, 0, 0, 0.25);

  ${mediaQueries.desktop} {
    width: 50%;
  }
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
  gap: 8px;

  /* ${mediaQueries.tablet} {
    flex-direction: row;
    gap: 2rem;
  } */
`;

const ProjectCard = ({ name, image, description, tags, netlify, github, reverse }) => {
  return (
    <CardWrapper $reverse={reverse}>
      {image && <Image src={`/assets/${image}`} alt={name} />}
      <InfoWrapper>
        <TextContainer>
          <TagContainer>
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </TagContainer>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </TextContainer>

        <LinksContainer>
          <ProjectLink label="Live demo" href={netlify} icon={<img src={LiveDemoIcon} alt="Live Demo Icon" />} />
          <ProjectLink label="View Code" href={github} icon={<img src={ViewCodeIcon} alt="View Code Icon" />} />
        </LinksContainer>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default ProjectCard;