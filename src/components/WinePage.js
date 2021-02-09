import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WinePage = () => {
  const [wine, setWine] = useState([]);
  const { lotCode } = useParams();
  const fetchWine = async () => {
    const api = 'http://localhost:5000/api/breakdown/search/';
    try {
      let response = await axios.get(`${api}/${lotCode}`);
      setWine(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWine();
  });

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

export default WinePage;
