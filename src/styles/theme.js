export const theme = {
  colors: {
    background: "#FFFFFF",
    text: "#333333",
  },
  fonts: {
    body: "ocr-a-std, monospace, Arial, sans-serif",
    fontWeight: 100,
    fontStyle: "normal"
  },
  fontSizes: {
    body: "clamp(14px, 1.2vw, 1.5rem)",
    h1: "clamp(1rem, 5vw, 3rem)",
    h2: "clamp(1.2rem, 4vw, 2.5rem)",
    h3: "clamp(1.2rem, 3vw, 2rem)",
    navLink: "clamp(1rem, 2.5vw, 1.25rem)",
  },
};

// NOTES:

// the theme.js file defines the theme for the application, including colors, fonts, and font sizes. 

// clamp() is used to create responsive font sizes that adjust based on the viewport width.