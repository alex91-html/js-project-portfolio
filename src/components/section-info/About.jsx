import styled from "styled-components";
import infoData from "../../data/info.json";


const About = () => {
  return (
    <AboutWrapper>
      <Title>{infoData.about.title}</Title>
      <Content>{infoData.about.content}</Content>
    </AboutWrapper>
  )
}
export default About;