import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WinePage = () => {
  const [wine, setWine] = useState([]);
  const [breakdown, setBreakdown] = useState([]);
  const [type, setType] = useState('year');
  const [showTable, setShowTable] = useState(false);
  const { lotCode } = useParams();

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

  const onClickHandler = (value) => {
    setType(value);
    fetchBreakdown(type);
  };

  const fetchBreakdown = async (key) => {
    const url = `http://localhost:5000/api/breakdown/${key}/${lotCode}`;
    console.log(url);
    try {
      let response = await axios.get(url);
      await setBreakdown(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWine();
    setShowTable(true);
  }, []);

  useEffect(() => {
    fetchBreakdown(type);
  }, [type]);

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
          <button className="tablinks" onClick={() => onClickHandler('year')}>
            Year
          </button>
          <button
            className="tablinks"
            onClick={() => onClickHandler('variety')}
          >
            Variety
          </button>
          <button className="tablinks" onClick={() => onClickHandler('region')}>
            Region
          </button>
          <button
            className="tablinks"
            onClick={() => onClickHandler('year-variety')}
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
              <tbody>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default WinePage;
