import React from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToEatDetail from '../ToEatDetail/ToEatDetail'

function ToEat() {
  let food = 'food'
  return (
    <Route path="/to-eat" exact render={() => (
      <div className='page'>
        <ToEatDetail data={food}/>
        <Buttons thing={food}/>
      </div>
    )} />
  );
}

export default ToEat;
