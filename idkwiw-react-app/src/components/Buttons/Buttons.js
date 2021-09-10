import React from 'react';
import { Link } from "react-router-dom";


function Buttons({thing, generate}) {

  return (
    // As a player, I want to see a generate button and home button on to eat/to drink/to do pages
    <div className="btnBox">
      <button onClick={generate}>
        <Link to={"/to-do"}>Generate a {thing}</Link>
      </button>
      {/* As a player, I want to click on the home button and go back to the home page */}
      <button>
        <Link to={"/home"}>Home</Link>
      </button>
    </div>
  );
}

export default Buttons;
