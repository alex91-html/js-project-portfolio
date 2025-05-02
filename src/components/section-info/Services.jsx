
import styled from "styled-components";
import infoData from "../../data/info.json";
import SectionTitle from "../common/SectionTitle.jsx";

const ServicesWrapper = styled.div``;
const ServicesList = styled.ul``
const ServiceItem = styled.li``


const Services = () => {
  return (
    <ServicesWrapper>
      <SectionTitle title={infoData.services.title} />
      <ServicesList>
        {infoData.services.content.map((service, index) => (
          <ServiceItem key={index}>{service}</ServiceItem>
        ))}
      </ServicesList>
    </ServicesWrapper>
  )
}
export default Services;