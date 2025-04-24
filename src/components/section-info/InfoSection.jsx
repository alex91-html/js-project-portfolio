import React from "react";
import infoData from "../../data/info.json";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Skills from "./SkillsSummery.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Friends from "./Friends.jsx";

const InfoSection = () => {
  return (<section>
    <About />
    <Services />
    <Skills />
    <Education />
    <Contact />
    <Friends />
  </section>)
}

export default InfoSection;