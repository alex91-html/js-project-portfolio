import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle";

const FriendsWrapper = styled.div``;


const Friends = () => {
  return (
    <FriendsWrapper>
      <SectionTitle title={infoData.friends.title} />
      <ul>
        {infoData.friends.content.map((friend, index) => (
          <li key={index}>
            <a href={friend.link} target="_blank" rel="noopener noreferrer">
              {friend.name}
            </a>
          </li>
        ))}
      </ul>
    </FriendsWrapper>
  );
};

export default Friends;