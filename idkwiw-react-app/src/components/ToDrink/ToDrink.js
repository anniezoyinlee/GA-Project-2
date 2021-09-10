import React from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToDrinkDetail from '../ToDrinkDetail/ToDrinkDetail'

function ToDrink() {
  let drink = 'drink'
  return (
    <Route path="/to-drink" excat render={() => (
      <div className='page'>
        <ToDrinkDetail data={drink}/>
        <Buttons thing={drink}/>
      </div>
    )} />
  );
}

export default ToDrink;
