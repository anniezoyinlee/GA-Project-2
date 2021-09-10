import React from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'

function ToEat() {
  let food = 'food'
  return (
    <div className='page'>
      <Route path="/to-eat" excat render={() => 
          <Buttons thing={food}/>
      } />
    </div>
  );
}

export default ToEat;
