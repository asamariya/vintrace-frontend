import React from 'react';

import titleCase from '../utils/helper';
import '../styles/breakdown-table.scss';

const BreakdownTable = ({ showTable, breakdown, items }) => {
  const replaceHyphen = (sentence) => {
    const breakdownType =
      sentence && sentence.replace('-', '&').split('&').join(' & ');
    return breakdownType;
  };

  return (
    <div className="breakdown-table">
      {showTable && (
        <div className="table">
          <div className="t-head">
            <div>
              {breakdown.breakDownType &&
                titleCase(replaceHyphen(breakdown.breakDownType))}
            </div>
            <div>Percentage</div>
          </div>
          <div className="t-body">{items}</div>
        </div>
      )}
    </div>
  );
};

export default BreakdownTable;
