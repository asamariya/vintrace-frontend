import React from 'react';

const WineInfo = ({ wine }) => {
  return (
    <div>
      <h2>{wine.lotCode}</h2>
      <h5>{wine.description}</h5>{' '}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h6>Volume</h6>
          <p>{wine.volume}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h6>Tank Code</h6>
          <p>{wine.tankCode}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h6>Product State</h6>
          <p>{wine.productState}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h6>Owner</h6>
          <p>{wine.ownerName}</p>
        </div>
      </div>
    </div>
  );
};

export default WineInfo;
