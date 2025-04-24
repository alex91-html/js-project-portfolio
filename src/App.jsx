import React from "react";
import ProjectsSection from "./components/section-project/ProjectsSection.jsx";
import TechSection from "./components/section-tech/TechSection.jsx";
import HeroSection from "./components/section-hero/HeroSection.jsx";
import InfoSection from "./components/section-info/InfoSection.jsx";


export const App = () => {
  return (
    <div>
      <HeroSection />
      <TechSection />
      <ProjectsSection />
      <InfoSection />
    </div>
  );
};