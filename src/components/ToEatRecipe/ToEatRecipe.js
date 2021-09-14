import React from 'react';
import { Route } from "react-router-dom";
import ReactPlayer from "react-player/youtube"

function ToEatRecipe({toEat}) {
  return (
    <Route path="/to-eat/recipe" render={() => (
      <div className='recipeVideo'>
        {/* embed youtube video from API */}
        <ReactPlayer className='react-player' 
        url={toEat.strYoutube} width='100%' 
        height='100%' 
        />
      </div>
    )} />
  );
}

export default ToEatRecipe;
