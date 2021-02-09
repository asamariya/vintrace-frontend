import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WineList from './WineList';

const Search = () => {
  const [query, setQuery] = useState('');
  const [wines, setWines] = useState([]);

  const getWines = async (query) => {
    const response = await axios.get(
      `http://localhost:5000/api/breakdown/search/wine?searchTerm=${query}`
    );
    setWines(response.data);
    // console.log(wines);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      getWines(query);
    } else {
      setWines([]);
    }
  }, [query]);

  return (
    <>
      <div>
        <h2>Wine Search</h2>
        <form>
          <input
            placeholder="Search by lot code and description..."
            onChange={handleInputChange}
          />
        </form>
        {wines.length > 0 && <WineList wines={wines} />}
      </div>
    </>
  );
};

export default Search;
