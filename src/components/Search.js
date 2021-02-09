import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [wines, setWines] = useState([]);

  const getWines = async (query) => {
    const response = await axios.get(
      `http://localhost:5000/api/breakdown/search/wine?searchTerm=${query}`
    );
    setWines(response.data);
    console.log(wines);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (query && query.length > 0) {
      getWines(query);
    }
  };

  return (
    <form action="">
      <input placeholder="Search for..." onChange={handleInputChange} />
      <p>{query}</p>
    </form>
  );
};

export default Search;
