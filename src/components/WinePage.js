/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid';
import BreakdownTable from './BreakdownTable';
import TypeTabs from './TypeTabs';
import WineInfo from './WineInfo';
import downArrowIcon from '../icons/DownArrow.svg';

import '../styles/breakdown-table.scss';

const WinePage = () => {
  const [wine, setWine] = useState([]);
  const [breakdown, setBreakdown] = useState([]);
  const [type, setType] = useState('year');

  const [showItems, setShowItems] = useState(5);
  const [showMore, setShowMore] = useState(false);

  const { lotCode } = useParams();

  useEffect(() => {
    fetchBreakdown();
  }, [type]);

  useEffect(() => {
    fetchBreakdown();
  }, [wine]);

  useEffect(() => {
    breakdown.breakdown && breakdown.breakdown.length > 5
      ? setShowMore(true)
      : setShowMore(false);
  }, [breakdown]);

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

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBreakdown = async () => {
    const url = `http://localhost:5000/api/breakdown/${type}/${lotCode}`;

    console.log(url);
    try {
      let response = await axios.get(url);
      await setBreakdown(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowMore = () => {
    setShowItems(
      showItems >= breakdown.breakdown && breakdown.breakdown.length
        ? showItems
        : showItems + 5
    );
    // setShowMore((prevShowMore) => !prevShowMore);
  };

  const items =
    breakdown.breakdown &&
    breakdown.breakdown.slice(0, showItems).map((item) => (
      <ul className="breakdown-list">
        <li key={v4()} className="breakdown-list-item">
          <div className="breakdown-list-type">
            {item.year ? item.year + ' - ' : null}
            {item.key}
          </div>
          <div className="breakdown-list-percent">{item.percentage}%</div>
        </li>
      </ul>
    ));

  return (
    <div className="wine-page">
      {wine && <WineInfo wine={wine} />}

      <div className="breakdown">
        <TypeTabs type={type} setType={setType} />
        <BreakdownTable
          items={items}
          breakdown={breakdown}
          showItens={showItems}
        />
        {showMore ? (
          <div className="showMoreBtn">
            <button onClick={handleShowMore}>Show More</button>

            <img src={downArrowIcon} alt="Down arrow icon" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WinePage;
