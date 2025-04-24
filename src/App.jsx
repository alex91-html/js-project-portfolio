import React from "react";
import ProjectsSection from "./components/section-project/ProjectsSection.jsx";
import SkillsSection from "./components/section-skills/SkillsSection.jsx";
import TechSection from "./components/section-tech/TechSection.jsx";



export const App = () => {
  return (
    <div>
      <TechSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};