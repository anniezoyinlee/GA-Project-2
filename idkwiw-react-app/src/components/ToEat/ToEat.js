import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToEatDetail from '../ToEatDetail/ToEatDetail'

function ToEat() {
  let food = 'a food';
  let toEatLink = '/to-eat';
  let recipe = '/to-eat/recipe';

  const [toEat, setToEat] = useState([
    // As a player, I want to see a placeholder food image and food name on the page
    {
      "strMeal": "Mushroom & Chestnut Rotolo",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg",
      "strYoutube": "https://www.youtube.com/watch?v=GNN7_ZSJ5YE",
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
        <div className='recipeLink'>
          <button onClick={getFood}>
            <Link to={recipe}><h2>Check recipe</h2></Link>
          </button>
        </div>
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
