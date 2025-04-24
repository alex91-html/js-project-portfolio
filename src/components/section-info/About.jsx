import React from "react";
import infoData from "../../data/info.json";


const About = () => {
  return (
    <div>
      <h2>{infoData.about.title}</h2>
      <p>{infoData.about.content}</p>
    </div>
  )
}
export default About;