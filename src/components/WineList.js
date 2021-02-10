import React from 'react';
import WineItem from './WineItem';

const WineList = ({ wines }) => {
  if (wines.length === 0) {
    return <h2>No wines found.</h2>;
  }

  return (
    <div className="search-list">
      {' '}
      <ul>
        {wines.map((wine) => (
          <WineItem wine={wine} key={wine.lotCode} />
        ))}
      </ul>
    </div>
  );
};

export default WineList;
