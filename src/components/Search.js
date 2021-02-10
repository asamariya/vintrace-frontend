import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WineList from './WineList';
import wineGlassImg from '../icons/wineGlass.png';
import searchIcon from '../icons/Search.svg';

import '../styles/search.scss';

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

  const clearSearch = () => setQuery('');

  return (
    <>
      <div className="search">
        <div className="heading">
          <h2>Wine Search</h2>
          <img src={wineGlassImg} alt="Wine glass icon" />
        </div>
        <div className="search-info">
          <form className="search-form">
            <img src={searchIcon} alt="Search Icon" />
            <input
              type="text"
              placeholder="Search by lot code and description..."
              onChange={handleInputChange}
              value={query}
            />
            {query !== '' && (
              <button
                className="closeBtn"
                type="reset"
                onClick={clearSearch}
              ></button>
            )}
          </form>
          {wines.length > 0 && <WineList query={query} wines={wines} />}
        </div>
      </div>
    </>
  );
};

export default Search;
