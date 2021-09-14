import React from 'react';
import { Route } from "react-router-dom";
import ReactPlayer from "react-player/youtube"

function ToDrinkRecipe({toDrink}) {
  return (
    <Route path="/to-drink/recipe" render={() => (
      <div className='recipeVideo'>
        <ReactPlayer className='react-player' url={toDrink.strVideo} />
      </div>
    )} />
  );
}

export default ToDrinkRecipe;
