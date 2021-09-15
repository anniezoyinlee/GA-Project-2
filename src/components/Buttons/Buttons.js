import React from 'react';
import { Link } from 'react-router-dom';

// get props from ToEat/ToDrink/ToDo components
// page => /to-eat /to-drink /to-do
// thing => food/drink/activity
// generate => function to get json object from api link
function Buttons({page, thing, generate}) {

  return (
    // As a player, I want to see a generate button and home button on to eat/to drink/to do pages
    <div className='btnBox'>
      {/* As a player, I want to click on generate button and see a new to eat/to drink/to do suggestion */}
      <button onClick={generate}>
        <Link to={page}>Generate a new {thing}</Link>
      </button>
      {/* As a player, I want to click on the home button and go back to the home page */}
      <button>
        <Link to={'/'}>Home</Link>
      </button>
    </div>
  );
}

export default Buttons;
