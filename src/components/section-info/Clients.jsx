import React from "react";
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";


const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;

 /* ${mediaQueries.desktop} { 
  max-width: 60%;
 } */

`;

const ClientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ClientsIntro = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ClientItem = styled.li`
  line-height: 1.6;
`;

const Clients = () => {
  const { title, content, names } = infoData.clients;

  return (
    <ClientsWrapper>
      <SectionTitle title={title} />
      <ClientsIntro>{content}</ClientsIntro>
      <ClientsList>
        {names.map((name, idx) => (
          <ClientItem key={idx}>{name}</ClientItem>
        ))}
      </ClientsList>
    </ClientsWrapper>
  );
};

export default Clients;