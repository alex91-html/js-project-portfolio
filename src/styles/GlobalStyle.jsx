import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://use.typekit.net/zoj7yqa.css);


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.body};
    font-optical-sizing: auto;
    font-weight: ${({ theme }) => theme.fonts.fontWeight};
    color: ${({ theme }) => theme.colors.text};
    scroll-behavior: smooth;
    text-decoration: none;
    list-style: none;
    transition: color 0.3s;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
  }
`;

