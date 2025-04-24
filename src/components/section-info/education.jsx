import React from "react";
import infoData from "../../data/info.json";

const Education = () => {
  return (
    <div>
      <h2>{infoData.education.title}</h2>
      <ul>
        {infoData.education.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Education;