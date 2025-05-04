
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from "../../styles/media.js";

const SkillsWrapper = styled.div``;
const CategoryHeading = styled.h3`
display: inline-block;
  border: 2px solid #333333;
  border-radius: 25px;
  padding: 0.5rem 2rem;
  color: #333333;
  background-color: white;
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3rem;


  ${mediaQueries.tablet} {
  flex-direction: row;
}


`;


const Skills = () => {
  return (
    <SkillsWrapper>
      <SectionTitle title={infoData.skills?.title || "Skills"} />
      <SkillsList>
        {Object.entries(infoData.skills.categories).map(([category, skills], index) => (
          <div key={index}>
            <CategoryHeading>{category}</CategoryHeading>
            <ul>
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </SkillsList>
    </SkillsWrapper>
  );
};

export default Skills;