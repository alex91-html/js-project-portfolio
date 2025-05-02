
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle";

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