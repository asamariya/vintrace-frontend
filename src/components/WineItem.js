import React from 'react';
import { Link } from 'react-router-dom';

const WineItem = ({ wine }) => {
  return (
    <>
      <Link to={`/${wine.lotCode}`}>
        <li key={wine.lotCode}>
          <h3>{wine.lotCode}</h3>
          <p>{wine.description}</p>
          <p>{wine.volume} L</p>
          <p>{wine.tankCode}</p>
        </li>
      </Link>
    </>
  );
};

export default WineItem;
