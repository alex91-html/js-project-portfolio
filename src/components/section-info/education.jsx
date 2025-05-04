import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle";

const EducationWrapper = styled.div``;
const EducationList = styled.ul``;
const EducationItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;

  & > span.school {
    font-style: italic;
  }
`;

const Education = () => {
  const education = infoData.education?.content || [];
  return (
    <EducationWrapper>
      <SectionTitle title={infoData.education?.title || "Education"} />
      <EducationList>
        {education.map((item, index) => (
          <EducationItem key={index}>
            <span className="school">{item.school}</span> – {item.program}
          </EducationItem>
        ))}
      </EducationList>
    </EducationWrapper>
  );
};

export default Education;