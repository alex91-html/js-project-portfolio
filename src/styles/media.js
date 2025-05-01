const breakpoints = {
  mobile: '320px',
  tablet: '400px',
  desktop: '1024px',
};

export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
};