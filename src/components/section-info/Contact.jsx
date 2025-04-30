
import infoData from "../../data/info.json";

const Contact = () => {
  return (
    <div>
      <h2>{infoData.contact.title}</h2>
      <ul>
        {infoData.contact.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;