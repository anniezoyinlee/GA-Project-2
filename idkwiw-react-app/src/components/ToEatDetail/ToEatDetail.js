import React from 'react';

function ToEatDetail({toEat}) {
  return (
    <div className='detail'>
      <img src={toEat.strMealThumb} alt={toEat.strMeal}/>
      <h2>{toEat.strMeal}</h2>
    </div>
  );
}

export default ToEatDetail;
