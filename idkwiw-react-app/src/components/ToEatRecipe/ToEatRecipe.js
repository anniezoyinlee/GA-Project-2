import React from 'react';
import { Route } from "react-router-dom";
import ReactPlayer from "react-player/youtube"

function ToEatRecipe({toEat}) {
  return (
    <Route path="/to-eat/recipe" render={() => (
      <div className='recipeVideo'>
        <ReactPlayer url={toEat.strYoutube} />
      </div>
    )} />
  );
}

export default ToEatRecipe;
