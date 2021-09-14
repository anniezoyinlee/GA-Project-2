import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToEatDetail from '../ToEatDetail/ToEatDetail'

function ToEat() {
  // showing on the generate button/prop: thing in Buttons component
  let food = 'food';
  // prop: page in Buttons component
  let toEatLink = '/to-eat';

  const [toEat, setToEat] = useState([
    // As a player, I want to see a placeholder image and food name on to eat page
    {
      "strMeal": "Mushroom & Chestnut Rotolo",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg",
      "strYoutube": "https://www.youtube.com/watch?v=GNN7_ZSJ5YE",
    }
  ]);

  // function to get api
  const getFood = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((json) => {
      setToEat(json.meals)
    })
  }

  return (
    <Route path="/to-eat" render={() => (
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
