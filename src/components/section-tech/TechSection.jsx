import styled from 'styled-components';
import infoData from '../../data/info.json';
import { mediaQueries } from '../../styles/media';

const TechWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 16px;
  text-align: center;

${mediaQueries.tablet} {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
}`;

const TechTitle = styled.h2``;

const TechList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;

${mediaQueries.tablet} {
  flex-direction: row;
  justify-content: flex-start;
}

`;

const TechItem = styled.li``;



const TechSection = () => {
  return (
    <TechWrapper>
      <TechTitle>{infoData.tech.title}</TechTitle>
      <TechList>
        {infoData.tech.items.map((item, index) => (
          <TechItem key={index}>{item}{index < infoData.tech.items.length - 1 && ','}</TechItem>
        ))}
      </TechList>
    </TechWrapper>
  );
};

export default TechSection;