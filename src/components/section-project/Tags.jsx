import styled from "styled-components";
import { mediaQueries } from "../../styles/media.js";

const TagSpan = styled.span`
display: inline-block;  
padding: 0.2rem 1rem;
border-radius: 25px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.211);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); 
  }

${mediaQueries.desktop} {
padding: 0.2rem 1.5rem;
}
`;



const Tag = ({ text }) => {
  return <TagSpan>{text}</TagSpan>;
};

export default Tag;