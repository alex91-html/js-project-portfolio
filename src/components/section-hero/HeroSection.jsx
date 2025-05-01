import styled from 'styled-components';
import infoData from '../../data/info.json';
import { mediaQueries } from '../../styles/media';

// styled-compoenents
const SectionWrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 16px;
/* text-align: center; */
`;


const HeroText = styled.h1`
font-size: ${({ theme }) => theme.fontSizes.h1}; 
letter-spacing: 0.05em;

@media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h1}; 
  }
`;

const HeroSection = () => {

  return (
    <SectionWrapper>
      <HeroText>{infoData.hero.content}</HeroText>
    </SectionWrapper>
  )
}
export default HeroSection;