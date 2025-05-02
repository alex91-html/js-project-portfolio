import styled from 'styled-components';
import infoData from '../../data/info.json';
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from '../../styles/media.js';

const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


  ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; 
  margin-top: 32px;

  ${mediaQueries.tablet} {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

const TechItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

const Tech = () => {
  return (
    <TechWrapper>
      <SectionTitle title={infoData.tech.title} />
      <TechList>
        {infoData.tech.items.map((item, index) => (
          <TechItem key={index}>{item}</TechItem>
        ))}
      </TechList>
    </TechWrapper>
  );
};

export default Tech;