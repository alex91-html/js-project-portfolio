import React from 'react';
import infoData from '../../data/info.json';

const TechSection = () => {
  return (
    <section>
      <h2>Tech</h2>
      <ul>
        {infoData.tech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default TechSection;