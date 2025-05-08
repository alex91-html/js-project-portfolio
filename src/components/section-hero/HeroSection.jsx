import styled from 'styled-components';
import infoData from '../../data/info.json';
import { mediaQueries } from '../../styles/media';

// styled-compoenents
const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100vh - 60px); 
  padding: 1rem; 

  ${mediaQueries.desktop} {
    height: 100vh;
    padding: 0; 
  }

`;


const HeroText = styled.h1`
hyphens: auto;
overflow-wrap: break-word;
word-wrap: break-word;

${mediaQueries.desktop} {
  max-width: 60%;
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