
import React from 'react';
import "./search.css" 
import CuisineDropdown from './CuisineDropdown'; 

function SearchInput({ query, setQuery, cuisines, selectedCuisine, filterByCuisine, resetData }) {

  return (

  // Update the query state when the input value changes
    <div id="search">
      <input
        type="text"
        id="input"
        placeholder="Search for a recipe..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="dropdown">
        <CuisineDropdown
          cuisines={cuisines}
          selectedCuisine={selectedCuisine}
          filterByCuisine={filterByCuisine} 
          resetData={resetData} 
        /></div>
    </div>
  );
};
export default SearchInput;