import React from 'react';
import { Link, Route } from "react-router-dom";
import ToDrinkRecipe from '../ToDrinkRecipe/ToDrinkRecipe';

const ErrorElement = () => {
  return <div className='error'><h2>Content Not Found :(</h2></div>
}

function ToDrinkDetail({toDrink, err}) {
  let recipe = '/to-drink/recipe';
  if (err) {
    return <ErrorElement />
  }

  return (
    <div className='showBox'>
      {/* show placeholder content from ToDrink component*/}
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
          {/* only show recipe button if the video link form API is available */}
          {toDrink.strVideo === null || toDrink.strVideo === ""? 
          null:
          <button>
            <Link to={recipe}>Learn more about this drink</Link>
          </button>
          }
        </div>
      )} />
    </div>
  );
}

export default ToDrinkDetail;
