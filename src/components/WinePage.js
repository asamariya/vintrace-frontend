import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid';
import BreakdownTable from './BreakdownTable';
import TypeTabs from './TypeTabs';
import WineInfo from './WineInfo';

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
      <WineInfo wine={wine} />
      <div>
        <TypeTabs fetchBreakdown={fetchBreakdown} />
        <BreakdownTable
          showTable={showTable}
          items={items}
          breakdown={breakdown}
        />
        {showMore && <button onClick={handleShowMore}>Show More</button>}
      </div>
    </>
  );
};

export default WinePage;
