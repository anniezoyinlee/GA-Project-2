import React from 'react';
import { Link } from "react-router-dom";

function Subtitle() {
  return (
    <div className="links">
      <button><Link to={"/to-eat"}>To Eat</Link></button>
      <button><Link to={"/to-drink"}>To Drink</Link></button>
      <button><Link to={"/to-do"}>To Do</Link></button>
    </div>
  );
}

export default Subtitle;
