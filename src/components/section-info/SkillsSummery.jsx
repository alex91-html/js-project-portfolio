import React from "react";
import infoData from "../../data/info.json";

const Skills = () => {
  return (
    <div>
      <h2>{infoData.skills.title}</h2>
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
    </div>
  );
};

export default Skills;