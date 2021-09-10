import React from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'

function ToDrink() {
  let drink = 'drink'
  return (
    <div className='page'>
      <Route path="/to-drink" excat render={() => 
          <Buttons thing={drink}/>
      } />
    </div>
  );
}

export default ToDrink;
