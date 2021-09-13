import React from 'react';
import { Route } from "react-router-dom";
import ReactPlayer from "react-player"

function ToEatRecipe({toEat}) {
  return (
    <Route path="/to-eat/recipe" render={() => (
      <div className='recipe'>
        <div className='recipeVideo'>
          <h2>recipe video</h2>
          <ReactPlayer url={toEat.strYoutube} />
        </div>
        
      </div>
    )} />
  );
}

export default ToEatRecipe;
