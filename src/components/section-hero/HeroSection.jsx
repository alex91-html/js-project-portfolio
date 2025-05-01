import styled from 'styled-components';
import infoData from '../../data/info.json';

// styled-compoenents
const HeroWrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 16px;
text-align: center;
`;


const HeroText = styled.h1`
font-size: 1rem;
letter-spacing: 0.05em;
`;

const HeroSection = () => {

  return (
    <HeroWrapper>
      <HeroText>{infoData.hero.content}</HeroText>
    </HeroWrapper>
  )
}
export default HeroSection;