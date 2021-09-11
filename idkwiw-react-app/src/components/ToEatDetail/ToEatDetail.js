import React from 'react';

function ToEatDetail({toEat}) {
  return (
    <div className='showBox'>
      <div className='imageContainer'>
        <img src={toEat.strMealThumb} alt={toEat.strMeal}/>
      </div>
      <div className='description'>
        <h2>{toEat.strMeal}</h2>
      </div>
    </div>
  );
}

export default ToEatDetail;
