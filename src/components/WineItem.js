import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/wine-item.scss';

const WineItem = ({ query, wine }) => {
  return (
    <>
      <Link to={`/${wine.lotCode}`}>
        <li key={wine.lotCode} className="search-list-item">
          <div className="list-item-left">
            {}
            <h3>{wine.lotCode}</h3>

            <p>{wine.description}</p>
          </div>
          <div className="list-item-right">
            <p>{wine.volume.toLocaleString()} L</p>
            <p>{wine.tankCode}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default WineItem;
