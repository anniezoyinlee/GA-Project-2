import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToEatDetail from '../ToEatDetail/ToEatDetail'

function ToEat() {
  let food = 'a food'
  let toEatLink = '/to-eat'
  const [toEat, setToEat] = useState([
    {
      "strMeal": "Apple & Blackberry Crumble",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    }]);

  const getFood = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((json) => {
      setToEat(json.meals)
    })
  }

  return (
    <Route path="/to-eat" exact render={() => (
      <div className='page'>
        {toEat.map((mealObj, idx) => {
          return(
            <ToEatDetail 
            toEat={mealObj}
            key={idx}
            />
          )
        })}
        <Buttons 
        generate={getFood} 
        thing={food}
        page={toEatLink}
        />
      </div>
    )} />
  );
}

export default ToEat;
