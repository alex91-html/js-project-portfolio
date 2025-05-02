
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-optical-sizing: auto;
    scroll-behavior: smooth;
    text-decoration: none;
    list-style: none;
    transition: color 0.3s;
    font-family: ${({ theme }) => theme.fonts.body};  
    font-size: ${({ theme }) => theme.fontSizes.body}; 
    font-weight: ${({ theme }) => theme.fonts.fontWeight};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }


  section {
    padding: clamp(1rem, 5vw, 2rem); 
    margin-bottom: 64px; 
  }

  nav {
    padding: clamp(1rem, 5vw, 2rem); 
  }

  section:last-child {
    margin-bottom: 0; 
  }


  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1}; 
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2}; 
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3}; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

// NOTES:
// The global styles are applied to all elements in the application. 