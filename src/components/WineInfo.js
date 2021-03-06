import React from 'react';
import { useHistory } from 'react-router-dom';

import titleCase from '../utils/helper';
import '../styles/wine-info.scss';
import backArrow from '../icons/Back.svg';
import editIcon from '../icons/Edit.svg';
import wIcon from '../icons/W.png';

const WineInfo = ({ wine }) => {
  let history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  const showMsg = () => alert(`You've clicked the edit button!`);

  return (
    <div className="wine-info">
      <div className="wine-info-header">
        <div className="backBtn">
          <img src={backArrow} alt="Back arrow" onClick={goBack} />
        </div>
        <div className="title">
          <div className="title-left">
            <img src={wIcon} alt="W" />
            <h2>{wine.lotCode}</h2>
          </div>

          <img src={editIcon} alt="Edit icon" onClick={showMsg} />
        </div>
        <h5>{wine.description && titleCase(wine.description)}</h5>
      </div>
      <div className="wine-info-body">
        <div className="wine-info-row">
          <h6>Volume</h6>
          <p>{wine.volume && wine.volume.toLocaleString()} L</p>
        </div>
        <div className="wine-info-row">
          <h6>Tank Code</h6>
          <p>{wine.tankCode}</p>
        </div>
        {wine && wine.productState && (
          <div className="wine-info-row">
            <h6>Product State</h6>
            <p>{wine.productState}</p>
          </div>
        )}

        <div className="wine-info-row">
          <h6>Owner</h6>
          <p>{wine.ownerName}</p>
        </div>
      </div>
    </div>
  );
};

export default WineInfo;
