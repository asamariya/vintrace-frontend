import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid';

const WinePage = () => {
  const [wine, setWine] = useState([]);
  const [breakdown, setBreakdown] = useState([]);
  const [type, setType] = useState('year');
  const [showTable, setShowTable] = useState(false);
  const [showItems, setShowItems] = useState(5);
  const [showMore, setShowMore] = useState(false);
  const { lotCode } = useParams();

  const fetchBreakdown = async (key) => {
    setShowMore(false);
    setType(key);
    const url = `http://localhost:5000/api/breakdown/${key}/${lotCode}`;
    console.log(url);
    try {
      let response = await axios.get(url);
      await setBreakdown(response.data);
      breakdown.breakdown && breakdown.breakdown.length > 5
        ? setShowMore(true)
        : setShowMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchWine = async () => {
      const api = 'http://localhost:5000/api/breakdown/search/';
      console.log('fetchWine');
      try {
        let response = await axios.get(`${api}/${lotCode}`);
        setWine(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWine();
    setShowTable(true);
    fetchBreakdown(type);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMore = () => {
    setShowItems(
      showItems >= breakdown.breakdown && breakdown.breakdown.length
        ? showItems
        : showItems + 5
    );
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const items =
    breakdown.breakdown &&
    breakdown.breakdown.slice(0, showItems).map((item) => (
      <tr key={v4()}>
        <td>
          {item.year ? item.year + ' - ' : null}
          {item.key}
        </td>
        <td>{item.percentage}%</td>
      </tr>
    ));

  return (
    <>
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
      <div>
        <div className="tab" style={{ width: '100%' }}>
          <button className="tablinks" onClick={() => fetchBreakdown('year')}>
            Year
          </button>
          <button
            className="tablinks"
            onClick={() => fetchBreakdown('variety')}
          >
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
        {showMore && <button onClick={handleShowMore}>Show More</button>}
      </div>
    </>
  );
};

export default WinePage;
