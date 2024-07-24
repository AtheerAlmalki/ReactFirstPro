import React, { useState } from 'react'; // Import necessary React functions
import LikeButton from '../Components/LikeButton'; // Import the LikeButton component
import { Rate } from 'antd'; // Import the Rate component from the Ant Design library
import './Recipes.css'; // Import the CSS file for the Recipes component
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks from React Router
import icon1 from './calories(1).png';
import icon2 from './chronometer.png';
import icon3 from './cutlery.png';

function Recipes() {

  // Define the Recipes component with the necessary props
  const { state } = useLocation(); // Get the state from the React Router location
  const { recipe } = state; // Extract the recipe object from the state
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleGoBack = () => {
    // Define a function to handle the "Go Back" button click
    navigate('/'); // Navigate back to the root route
    window.scrollTo(0, 0); // Scroll the window to the top-left corner of the page
  };

  return (
    // Render the Recipes component
    <div className="container">
      <div className="Mains">
      </div>
      <div className="Box">
        <div className="Mini">
          {/* Render the recipe image */}
          <div className="btn2">
            <img src={recipe.image} className="img2" alt={recipe.name} />
          </div>
          <div className="btn3">
            {/* Render the recipe name */}
            <br />
            <b className="Name2">{recipe.name}</b>
            <div className="Mini2">
              <br />
              <div className='Like'>
                <LikeButton /> {/* Render the LikeButton component */}</div>
              <div className="Rate2">
                {/* Render the recipe rating using the Ant Design Rate component */}
                <Rate value={recipe.rating} allowHalf disabled />
                <br />
                <b>{recipe.rating}/5</b>
              </div>
            </div>
            <div className="Details">
              {/* Render the calories per serving and the Like button */}
              <b><img src={icon1} className='icons' /> &nbsp; Calories Per Serving: {recipe.caloriesPerServing}</b>
              {/* Render the recipe cook time and servings */}
              <b><img src={icon2} className='icons' /> &nbsp; Cook Time: {recipe.cookTimeMinutes}</b>
              <b><img src={icon3} className='icons' /> &nbsp; Serves: {recipe.servings}</b>
            </div>
          </div>
        </div>
        {/* Render the recipe ingredients */}
        <br />
        <div className="ingredents2">
          <b>Ingredients:</b><br />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {/* Render the recipe instructions as an ordered list */}
          <b>Instructions:</b>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <button className="btnBack" onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
}

export default Recipes; // Export the Recipes component