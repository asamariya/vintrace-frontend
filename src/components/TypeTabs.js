import React from 'react';

import '../styles/type-tabs.scss';

const TypeTabs = ({ type, setType }) => {
  return (
    <div className="tabs" style={{ width: '100%' }}>
      <button
        className={type === 'year' ? 'active tablinks' : 'tablinks'}
        onClick={() => setType('year')}
      >
        Year
      </button>
      <button
        className={type === 'variety' ? 'active tablinks' : 'tablinks'}
        onClick={() => setType('variety')}
      >
        Variety
      </button>
      <button
        className={type === 'region' ? 'active tablinks' : 'tablinks'}
        onClick={() => setType('region')}
      >
        Region
      </button>
      <button
        className={type === 'year-variety' ? 'active tablinks' : 'tablinks'}
        onClick={() => setType('year-variety')}
      >
        Year &amp; Variety
      </button>
    </div>
  );
};

export default TypeTabs;
