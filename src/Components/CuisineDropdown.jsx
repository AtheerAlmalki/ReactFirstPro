// components/CuisineDropdown.jsx
import React from 'react';
import Back from './back.png'
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';



function CuisineDropdown({ cuisines, selectedCuisine, filterByCuisine, resetData }) {

    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown((prevState) => !prevState);
    };
    const handleClickOutside = (event) => {
      if (!event.target.matches('.dropbtn')) {
        setShowDropdown(false);
      }
    };
  
    window.addEventListener('click', handleClickOutside);
  
    return (
      <div className="dropdown">
        <FiFilter size={20} className="dropbtn" onClick={toggleDropdown} />
        {showDropdown && (
          <div className="dropdown-content show">
            <b>Cuisine</b>
            {cuisines.map((cuisine) => (
              <div
                key={cuisine}
                className={`Type ${selectedCuisine === cuisine ? 'selected' : ''}`}
                onClick={() => filterByCuisine(cuisine)}
              >
                <div>{cuisine}</div>
              </div>
            ))}
            <div
              className={`Type ${selectedCuisine === null ? 'selected' : ''}`}
              onClick={resetData}
            >
              <div className="Type2"> &nbsp;<img src={Back} alt="Reset" /></div>
            </div>
          </div>
        )}
      </div>
    );
  };
export default CuisineDropdown;