import React from 'react';
import ToEatRecipe from '../ToEatRecipe/ToEatRecipe';

function ToEatDetail({toEat}) {
  return (
    <div className='showBox'>
      <div className='imageContainer'>
        <img src={toEat.strMealThumb} alt={toEat.strMeal}/>
      </div>
      <div className='description'>
        <h2>{toEat.strMeal}</h2>
      </div>
      <div className='recipe'>
        <ToEatRecipe 
          toEat={toEat}
        />
      </div>
    </div>
  );
}

export default ToEatDetail;
