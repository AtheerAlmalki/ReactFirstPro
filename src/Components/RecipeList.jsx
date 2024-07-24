// components/RecipeList.jsx
import React from 'react';
import { Rate } from 'antd'; // Import the Rate component from the Ant Design library
import LikeButton from './LikeButton'; // Import the LikeButton component
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom
import icon1 from '../Pages/calories(1).png';
import icon2 from '../Pages/chronometer.png';
import icon3 from '../Pages/cutlery.png';

function RecipeList({ recipe }) {
  // Receive the recipe prop, which contains the recipe data
  const navigate = useNavigate(); // Create a reference to the useNavigate function

  const handleReadMore = () => {
    // Define a function to handle the "Read More" button click
    navigate(`/recipes/${recipe.id}`, { state: { recipe } }); // Navigate to the recipe detail page, passing the recipe data as state
    window.scrollTo(0, 0); // Scroll the window to the top-left corner of the page
  };

  return (
    <div className='col'>
      <div className="recipe-container">
        <img src={recipe.image} className="img" alt={recipe.name} /> {/* Render the recipe image */}
        <div className="btn">
          <h5 className="Name">{recipe.name}</h5> {/* Render the recipe name */}
          <div className="ingredents">
            <b>Ingredients:</b>
            <br />
            <br />
            {recipe.ingredients} {/* Render the recipe ingredients */}
            <br />
          </div>
        </div>
        <div className='Detailes1' >
          {/*<img src={icon1} className='icons' />&nbsp;*/}Calories Per Serving: {recipe.caloriesPerServing}<br /> {/* Render the calories per serving */}
          {/*<img src={icon2} className='icons' />&nbsp;*/}Cook Time: {recipe.cookTimeMinutes}<br /> {/* Render the cook time */}
          {/*<img src={icon3} className='icons' />&nbsp;*/}Serves: {recipe.servings}<br /> {/* Render the number of servings */}
        </div>
        <div className="Rate">
          <Rate value={recipe.rating} allowHalf disabled /> {/* Render the recipe rating */}
          <br />
          <b>{recipe.rating}/5</b> {/* Render the recipe rating as text */}
        </div>
        <LikeButton /> {/* Render the LikeButton component */}
       <div className='More'>
        <button className="ReadMore" onClick={handleReadMore}>Read More</button> {/* Render the "Read More" button and attach the handleReadMore function to its onClick event */}
       </div> 
      </div>
    </div>
  );
};

export default RecipeList; // Export the RecipeList component