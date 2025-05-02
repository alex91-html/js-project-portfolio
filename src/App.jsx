import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";
import { theme } from "./styles/theme.js";

import ProjectsSection from "./components/section-project/ProjectsSection.jsx";
import HeroSection from "./components/section-hero/HeroSection.jsx";
import InfoSection from "./components/section-info/InfoSection.jsx";
import Navbar from "./components/common/Navbar.jsx";



export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <InfoSection />
    </ThemeProvider >

  );
};