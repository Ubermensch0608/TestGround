import React from 'react';

const Species = ({ name, language, averageLifespan }) => {
  return (
    <li>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  );
};

export default Species;
