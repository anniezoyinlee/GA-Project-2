import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div className='links'>
      {/* As a player, I want to see a home page with links for 'To Eat', 'To Drink', and 'To Do' */}
      {/* As a player, I want to click on each of the links and go to their page */}
      <button><Link to={'/to-eat'}>To Eat</Link></button>
      <button><Link to={'/to-drink'}>To Drink</Link></button>
      <button><Link to={'/to-do'}>To Do</Link></button>
    </div>
  );
}

export default Links;
