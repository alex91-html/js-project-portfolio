import React from "react";
import ProjectsSection from "./components/section-project/ProjectsSection.jsx";
import SkillsSection from "./components/section-skills/SkillsSection.jsx";


export const App = () => {
  return (
    <div>
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};