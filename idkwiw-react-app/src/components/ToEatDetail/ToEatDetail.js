import React from 'react';
import { Link } from "react-router-dom";
import ToEatRecipe from '../ToEatRecipe/ToEatRecipe';

function ToEatDetail({toEat, generate}) {
  let recipe = '/to-eat/recipe';

  return (
    <div className='showBox'>
      <div className='imageContainer'>
        <img src={toEat.strMealThumb} alt={toEat.strMeal}/>
      </div>
      <div className='description'>
        <h2>{toEat.strMeal}</h2>
      </div>
      <div className='recipeBtn'>
        <button onClick={generate}>
          <Link to={recipe}><h2>Check Recipe</h2></Link>
        </button>
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
