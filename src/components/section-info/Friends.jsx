import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle";
import { mediaQueries } from "../../styles/media";

const FriendsWrapper = styled.div``;
const Link = styled.a`
    color: #333333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  `;

const Friends = () => {
  return (
    <FriendsWrapper>
      <SectionTitle title={infoData.friends.title} />
      <ul>
        {infoData.friends.content.map((friend, index) => (
          <li key={index}>
            <Link href={friend.link} target="_blank" rel="noopener noreferrer">
              {friend.name}
            </Link>
          </li>
        ))}
      </ul>
    </FriendsWrapper>
  );
};

export default Friends;