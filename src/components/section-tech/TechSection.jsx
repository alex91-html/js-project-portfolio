import React from 'react';
import techData from '../../data/tech.json';

const TechSection = () => {
  return (
    <section>
      <h2>Tech</h2>
      <ul>{techData.tech.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>

    </section>
  );

};

export default TechSection;
