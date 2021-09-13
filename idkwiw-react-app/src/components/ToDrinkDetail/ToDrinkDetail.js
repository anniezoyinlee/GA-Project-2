import React from 'react';
import { Link, Route } from "react-router-dom";
import ToDrinkRecipe from '../ToDrinkRecipe/ToDrinkRecipe';

function ToDrinkDetail({toDrink}) {
  let recipe = '/to-drink/recipe';

  return (
    <div className='showBox'>
      <div className='imageContainer'>
        <img src={toDrink.strDrinkThumb} alt={toDrink.strDrink}/>
      </div>
      <div className='description'>
        <h2>{toDrink.strDrink}</h2>
      </div>
      <div className='recipe'>
          <ToDrinkRecipe 
            toDrink={toDrink}
          />
      </div>
      <Route path="/to-drink" exact render={() => (
        <div className='recipeBtn'>
          {toDrink.strVideo === null || toDrink.strVideo === ""? 
          null:
          <button>
            <Link to={recipe}><h2>Learn more about this drink</h2></Link>
           </button>
          }
        </div>
      )} />
    </div>
  );
}

export default ToDrinkDetail;
