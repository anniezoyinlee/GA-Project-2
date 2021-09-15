import React from 'react';
import { Route } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

function ToEatRecipe({toEat}) {
  return (
    <Route path='/to-eat/recipe' render={() => (
      <div className='recipeVideo'>
        {/* embed youtube video from API */}
        <ReactPlayer 
        className='react-player' 
        url={toEat.strYoutube} 
        width='100%' 
        height='100%' 
        // For fixing Failed to execute 'postMessage' on 'DOMWindow' issue
        // reference: https://github.com/CookPete/react-player/issues/508
        config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
        />
      </div>
    )} />
  );
}

export default ToEatRecipe;
