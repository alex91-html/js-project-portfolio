
import infoData from "../../data/info.json";

const Services = () => {
  return (
    <div>
      <h2>{infoData.services.title}</h2>
      <ul>
        {infoData.services.content.map((service, index) => (
          <li key={index}>{service}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Services;