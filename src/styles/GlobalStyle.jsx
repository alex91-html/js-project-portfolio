
import { createGlobalStyle } from "styled-components";
import { mediaQueries } from "./media";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-optical-sizing: auto;
    scroll-behavior: smooth;
    text-decoration: none;
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.body};  
    font-size: ${({ theme }) => theme.fontSizes.body}; 
    font-weight: ${({ theme }) => theme.fonts.fontWeight};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5; 
    padding: clamp(1rem, 5vw, 5rem); 
  }


  button {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
  }


  nav {
    padding: clamp(1rem, 5vw, 2rem); 
  }

  section:last-child {
    margin-bottom: 0; 
    padding-top: 0.5rem;
  
    ${mediaQueries.desktop} {
      padding-top:2rem;
    }}
  


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