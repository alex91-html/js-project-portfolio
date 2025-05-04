
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from "../../styles/media.js";

const SkillsWrapper = styled.div``;
const CategoryHeading = styled.h3`
  display: inline-block;
  color: #333333;
  background-color: white;
  text-decoration: underline;

`;

const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.8rem;

  ${mediaQueries.tablet} {
  flex-direction: row;
  gap: 10rem;
}`;



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