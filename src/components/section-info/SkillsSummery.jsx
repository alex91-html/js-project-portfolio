
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";

const SkillsWrapper = styled.div``;


const Skills = () => {
  return (
    <SkillsWrapper>
      <SectionTitle title={infoData.skills?.title || "Skills"} />
      <div>
        {Object.entries(infoData.skills.categories).map(([category, skills], index) => (
          <div key={index}>
            <h3>{category}</h3>
            <ul>
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SkillsWrapper>
  );
};

export default Skills;