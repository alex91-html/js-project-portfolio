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
    body: "clamp(1rem, 1vw, 1rem)",
    h1: "clamp(1rem, 4vw, 2rem)",
    h2: "clamp(1rem, 3.5vw, 1.75rem)",
    h3: "clamp(1rem, 3vw, 1.5rem)",
    navLink: "clamp(1rem, 2vw, 1.25rem)",
  },
};

// NOTES:

// the theme.js file defines the theme for the application, including colors, fonts, and font sizes. 

// clamp() is used to create responsive font sizes that adjust based on the viewport width.