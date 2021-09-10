import React from 'react';
import { Link } from "react-router-dom";

function Buttons({thing}) {
  return (
    <div className="btnBox">
      <button>Generate a {thing}</button>
      <button><Link to={"/home"}>Home</Link></button>
    </div>
  );
}

export default Buttons;
