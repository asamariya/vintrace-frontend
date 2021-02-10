import React from 'react';

const BreakdownTable = ({ showTable, breakdown, items }) => {
  return (
    <div>
      {showTable && (
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>{breakdown.breakDownType}</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      )}
    </div>
  );
};

export default BreakdownTable;
