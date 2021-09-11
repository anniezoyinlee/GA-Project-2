import React from 'react';

function ToDrinkDetail({toDrink}) {
  return (
    <div className='detail'>
      <img src={toDrink.strDrinkThumb} alt={toDrink.strDrink}/>
      <h2>{toDrink.strDrink}</h2>
    </div>
  );
}

export default ToDrinkDetail;
