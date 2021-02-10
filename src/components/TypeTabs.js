import React from 'react';

const TypeTabs = ({ fetchBreakdown }) => {
  return (
    <div className="tab" style={{ width: '100%' }}>
      <button className="tablinks" onClick={() => fetchBreakdown('year')}>
        Year
      </button>
      <button className="tablinks" onClick={() => fetchBreakdown('variety')}>
        Variety
      </button>
      <button className="tablinks" onClick={() => fetchBreakdown('region')}>
        Region
      </button>
      <button
        className="tablinks"
        onClick={() => fetchBreakdown('year-variety')}
      >
        Year &amp; Variety
      </button>
    </div>
  );
};

export default TypeTabs;
