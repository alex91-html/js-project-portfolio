import React from "react";
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";
import { mediaQueries } from "../../styles/media.js";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  /* gap: 1.5rem;  */
`;

const ContactText = styled.p`
  color: #333333;
  margin-bottom: 1.5rem;

${mediaQueries.desktop} { 
  max-width: 50%;
}

`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;


const Link = styled.a`
    color: #333333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  `;

const ContactItem = styled.li`
  color: #333333;

`;

const Contact = () => {
  return (
    <ContactWrapper>
      <SectionTitle title={infoData.contact.title} />
      <ContactText>
        {infoData.contact.text.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </ContactText>
      <ContactText>
        Email: <Link href={`mailto:${infoData.contact.email}`}>{infoData.contact.email}</Link>
      </ContactText>
      <ContactList>
        {infoData.contact.content.map((item, index) => (
          <ContactItem key={index}>
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </Link>
          </ContactItem>
        ))}
      </ContactList>
    </ContactWrapper>
  );
};

export default Contact;