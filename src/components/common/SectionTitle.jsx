import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  /* text-align: center; */
  margin-bottom: 2rem;
  // color: ${({ theme }) => theme.colors.text};
  color: orange;

// add media query 

`;

const SectionTitle = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default SectionTitle;