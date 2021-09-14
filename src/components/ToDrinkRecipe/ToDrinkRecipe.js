import React from 'react';
import { Route } from "react-router-dom";
import ReactPlayer from "react-player/youtube"

function ToDrinkRecipe({toDrink}) {
  return (
    <Route path="/to-drink/recipe" render={() => (
      <div className='recipeVideo'>
        {/* embed youtube video from API */}
        <ReactPlayer className='react-player' 
        url={toDrink.strVideo} width='100%' 
        height='100%' 
        />
      </div>
    )} />
  );
}

export default ToDrinkRecipe;
