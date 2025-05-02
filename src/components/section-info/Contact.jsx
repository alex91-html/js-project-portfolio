
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";


const ContactWrapper = styled.div``;
const ContactList = styled.ul``;
const ContactItem = styled.li``;


const Contact = () => {
  return (
    <ContactWrapper>
      <SectionTitle title={infoData.contact.title} />
      <ContactList>
        {infoData.contact.content.map((item, index) => (
          <ContactItem key={index}>{item}</ContactItem>
        ))}
      </ContactList>
    </ContactWrapper>
  );
};

export default Contact;