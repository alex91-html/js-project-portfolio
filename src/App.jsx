import React from "react";
import ProjectsSection from "./components/section-project/ProjectsSection.jsx";
import SkillsSection from "./components/section-skills/SkillsSection.jsx";
import TechSection from "./components/section-tech/TechSection.jsx";
import AboutSection from "./components/section-about/AboutSection.jsx";
import HeroSection from "./components/section-hero/HeroSection.jsx";



export const App = () => {
  return (
    <div>
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};