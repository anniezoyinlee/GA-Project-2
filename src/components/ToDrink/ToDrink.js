import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToDrinkDetail from '../ToDrinkDetail/ToDrinkDetail'

function ToDrink() {
  // showing on the generate button/prop: thing in Buttons component
  let drink = 'drink'
  // prop: page in Buttons component
  let toDrinkLink = '/to-drink'

  const [toDrink, setToDrink] = useState([
    // As a player, I want to see a placeholder image and drink name on to drink page
    {
      "strDrink": "Flying Dutchman",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg",
      "strVideo": "https://www.youtube.com/watch?v=oH7PP_lV6J8",
    }
  ]);

  // function to get api
  const getDrink = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((json) => {
      setToDrink(json.drinks)
    })
  }

  return (
    <Route path="/to-drink" render={() => (
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
