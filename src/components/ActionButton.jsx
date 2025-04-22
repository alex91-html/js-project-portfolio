import React from 'react';

const ActionButton = ({ lable, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {lable}
    </a>
  );
};

export default ActionButton;