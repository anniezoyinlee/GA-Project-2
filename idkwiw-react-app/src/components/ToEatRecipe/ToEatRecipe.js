import React from 'react';
import { Route } from "react-router-dom";

function ToEatRecipe({toEat}) {
  console.log(toEat)
  return (
    <Route path="/to-eat/recipe" render={() => (
      <div className='recipeVideo'>
        <h2>recipe video</h2>
      </div>
    )} />
  );
}

export default ToEatRecipe;
