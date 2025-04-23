import React from "react";
import skillsData from "../../data/skills.json";

const SkillsSection = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        {Object.entries(skillsData.skills).map(([category, skills], index) => (
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
    </section>
  );
};

export default SkillsSection;
