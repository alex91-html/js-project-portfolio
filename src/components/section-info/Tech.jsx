import styled from 'styled-components';
import infoData from '../../data/info.json';
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from '../../styles/media.js';

const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; 
  
  ${mediaQueries.desktop} { 
    gap: 1rem; 
    max-width: 50%;
}
`;

const TechItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.211);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); 
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