import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToDrinkDetail from '../ToDrinkDetail/ToDrinkDetail'

function ToDrink() {
  let drink = 'a drink'
  let toDrinkLink = '/to-drink'
  const [toDrink, setToDrink] = useState([
    {
      "strDrink": "Flying Dutchman",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg",
    }]);

  const getDrink = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((json) => {
      setToDrink(json.drinks)
    })
  }

  return (
    <Route path="/to-drink" exact render={() => (
      <div className='page'>
        {toDrink.map((drinkObj, idx) => {
          return(
            <ToDrinkDetail 
            toDrink={drinkObj}
            key={idx}
            />
          )
        })}
        <Buttons 
        generate={getDrink} 
        thing={drink}
        page={toDrinkLink}
        />
      </div>
    )} />
  );
}

export default ToDrink;
