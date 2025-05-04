import styled from "styled-components";
import { mediaQueries } from "../../styles/media";

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
 /* font-weight: bold; */
 text-decoration: underline;
`;

const SectionTitle = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default SectionTitle;