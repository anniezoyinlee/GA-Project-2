import React from 'react';
import { Link, Route } from "react-router-dom";
import ToEatRecipe from '../ToEatRecipe/ToEatRecipe';

function ToEatDetail({toEat}) {
  let recipe = '/to-eat/recipe';

  return (
    <div className='showBox'>
      {/* show placeholder content from ToEat component*/}
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
      
      <Route path="/to-eat" exact render={() => (
        <div className='recipeBtn'>
          {/* only show recipe button if the video link form API is available */}
          {toEat.strYoutube === null || toEat.strYoutube === ""? 
          null:
          <button>
            <Link to={recipe}><h2>Learn more about this food</h2></Link>
          </button>
          }
        </div>
      )} />
    </div>
  );
}

export default ToEatDetail;
