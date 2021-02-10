import React from 'react';

import '../styles/type-tabs.scss';

const TypeTabs = ({ activeTab, fetchBreakdown }) => {
  return (
    <div className="tabs" style={{ width: '100%' }}>
      <button
        className={activeTab === 'year' ? 'active tablinks' : 'tablinks'}
        onClick={() => fetchBreakdown('year')}
      >
        Year
      </button>
      <button
        className={activeTab === 'variety' ? 'active tablinks' : 'tablinks'}
        onClick={() => fetchBreakdown('variety')}
      >
        Variety
      </button>
      <button
        className={activeTab === 'region' ? 'active tablinks' : 'tablinks'}
        onClick={() => fetchBreakdown('region')}
      >
        Region
      </button>
      <button
        className={
          activeTab === 'year-variety' ? 'active tablinks' : 'tablinks'
        }
        onClick={() => fetchBreakdown('year-variety')}
      >
        Year &amp; Variety
      </button>
    </div>
  );
};

export default TypeTabs;
