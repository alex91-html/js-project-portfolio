import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from "../../styles/media.js";
const AboutWrapper = styled.div`
display: flex;
flex-direction: column;
`;
const Content = styled.p`
max-width: 800px;
width: 100%;

${mediaQueries.desktop} { 
  max-width: 50%;
}
`;



const About = () => {
  return (
    <AboutWrapper>
      <SectionTitle title={infoData.about.title} />
      <Content
        dangerouslySetInnerHTML={{
          __html: infoData.about.content.replace(/\n/g, "<br>"),
        }}
      />
    </AboutWrapper>
  );
};
export default About;