import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";

const AboutWrapper = styled.div``;
const Title = styled.h2``;
const Content = styled.p``;


const About = () => {
  return (
    <AboutWrapper>
      <SectionTitle title={infoData.about.title} />
      <Content>{infoData.about.content}</Content>
    </AboutWrapper>
  )
}
export default About;