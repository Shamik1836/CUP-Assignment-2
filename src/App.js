import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import Details from './Details';

function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes() {
    const response = await fetch(`https://www.superheroapi.com/api.php/590643562113948/search/${searchText}`);
    const data = await response.json();
    

    setSuperheroData(data.results);
  }

  function handleChange(e) {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 1) {
      searchSuperHeroes();
    }
  }

  return (
      <div className="App">

        <Navbar />
        <div className="main">
          <SearchBar searchText={searchText} handleChange={handleChange} />
          <SearchResults superheroData={superheroData} />
          <Details/>
        </div>
      </div>
    

  );
}

export default App;