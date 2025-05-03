import styled from "styled-components";

const TagSpan = styled.span`
display: inline-block;  
border: 2px solid #333333;
/* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
border-radius: 25px;
padding: 0.5rem 2rem;
/* background-color: #40FF00; */
`;



const Tag = ({ text }) => {
  return <TagSpan>{text}</TagSpan>;
};

export default Tag;