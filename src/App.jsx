import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";
import { theme } from "./styles/theme.js";

import ProjectsSection from "./components/section-project/ProjectsSection.jsx";
import HeroSection from "./components/section-hero/HeroSection.jsx";
import InfoSection from "./components/section-info/InfoSection.jsx";
import Navbar from "./components/common/Navbar.jsx";
import CompanionSubtitle from "./components/common/CompanionSubtitle.jsx";



export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CompanionSubtitle />
      <GlobalStyle />
      <Navbar />
      <HeroSection id="hero-section" />
      <ProjectsSection id="projects-section" />
      <InfoSection id="info-section" />
    </ThemeProvider >

  );
};