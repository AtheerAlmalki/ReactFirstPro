// Fetch.jsx
import { useState, useEffect } from "react";
import React from 'react'
import "../Components/search.css"
import SearchInput from "../Components/SearchInput";
import RecipeList from "../Components/RecipeList";

function Fetch() {


  // State variables
  const [data, setData] = useState([]); // Holds the recipe data fetched from the API
  const [originalData, setOriginalData] = useState([]); // Holds the original fetched data, used for resetting the search
  const [query, setQuery] = useState(""); // Holds the user's search query, used for filtering the recipes
  const [notFound, setNotFound] = useState(false); // Tracks if no recipes were found for the search query, used for displaying a message
  const [showDropdown, setShowDropdown] = useState(false); // Tracks whether to show or hide the cuisine dropdown menu
  const [selectedCuisine, setSelectedCuisine] = useState(null); // Holds the currently selected cuisine, used for filtering the recipes
const [isPending, setIsPending] = useState(true); 
  // Fetch recipe data from the API
  const api = () => {
    // Use the Fetch API to fetch recipe data from the provided URL
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json()) // Parse the response as JSON
      .then((json) => {
        setData(json.recipes); // Update the data state with the fetched recipes
        setOriginalData(json.recipes); // Store the original fetched data
        setIsPending(false); // Set the pending state to false
      })
      
  }

  // Fetch recipe data when the component mounts
  useEffect(() => {
    api(); // Call the api() function to fetch the recipe data
  }, []);

  // Handle the search functionality
  const handleSearch = () => {
    // Filter the recipe data based on the search query
    const filteredRecipes = data.filter((recipes) =>
      // Check if the recipe name (converted to lowercase) 
      // includes the search query (also converted to lowercase)
      recipes.name.toLowerCase().split(' ')[0].includes(query)
    );

    // Update the notFound state based on the search results
    if (filteredRecipes.length === 0) {
      setNotFound(true); // Set notFound to true if no recipes were found
    } else {
      setNotFound(false); // Set notFound to false if at least one recipe was found
    }
  }

  // Update the search results whenever the query or data changes
  useEffect(() => {
    handleSearch(); // Call the handleSearch() function to update the search results
  }, [query, data]);

  // Function to toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  // Function to close the dropdown menu when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setShowDropdown(false);
    }
  };

  // Add an event listener to close the dropdown menu when clicking outside
  window.addEventListener('click', handleClickOutside);

  // Get the unique cuisines from the recipe data
  const cuisines = [...new Set(data.map(recipe => recipe.cuisine))];

  // Function to filter recipes by cuisine
  const filterByCuisine = (cuisine) => {
    // Update the selected cuisine state or variable
    setSelectedCuisine(cuisine);
    // Filter the recipe data to include only the recipes that match the selected cuisine
    setData(originalData.filter(recipe => recipe.cuisine === cuisine));
  };

  // Function to reset the data to the original fetched data
  const resetData = () => {
    setData(originalData);
    setSelectedCuisine(null);
  };

  return (
    <div>
      <div className="Mains">
        {/* Search input field */}
        <SearchInput query={query} setQuery={setQuery}
          cuisines={cuisines}
          selectedCuisine={selectedCuisine}
          filterByCuisine={filterByCuisine}
          resetData={resetData} />

      </div>
      {/* Display a message if no recipes were found */}
      {isPending && <div className="Loading">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        </div>}
      {notFound && (
        <div className="not-found">
          <p>Sorry, no recipes found matching your search query.</p>
        </div>
      )}
      {/* Display the recipe cards */}
      <div className="back">
        {!notFound &&
          data
            .filter((recipe) =>
              recipe.name.toLowerCase().split(' ')[0].includes(query)
            )
            .map((recipe) =>
              <RecipeList key={recipe.id} recipe={recipe} />
            )}
      </div>
    </div>
  );
};

export default Fetch;
