import styled from 'styled-components';
import infoData from '../../data/info.json';

// styled-compoenents


const HeroSection = () => {

  return (
    <HeroSection>
      <heroText>{infoData.hero.content}</heroText>
    </HeroSection>
  )
}
export default HeroSection;