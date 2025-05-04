import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from "../../styles/media.js";
const AboutWrapper = styled.div`
display: flex;
flex-direction: column;
/* gap: 0px; */
`;
const Content = styled.p`
max-width: 800px;
width: 100%;
line-height: 1.2; 

${mediaQueries.desktop} { 
  max-width: 50%;
}
`;


const About = () => {
  return (
    <AboutWrapper>
      <SectionTitle title={infoData.about.title} />
      <Content>{infoData.about.content}</Content>
    </AboutWrapper>
  )
}
export default About;