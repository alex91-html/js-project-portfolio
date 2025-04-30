
import infoData from "../../data/info.json";

const Friends = () => {
  return (
    <div>
      <h2>{infoData.friends.title}</h2>
      <ul>
        {infoData.friends.content.map((friend, index) => (
          <li key={index}>
            <a href={friend.link} target="_blank" rel="noopener noreferrer">
              {friend.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;