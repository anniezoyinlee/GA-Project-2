import React from 'react';

function ToDrinkDetail({toDrink}) {
  return (
    <div className='showBox'>
      <div className='imageContainer'>
        <img src={toDrink.strDrinkThumb} alt={toDrink.strDrink}/>
      </div>
      <div className='description'>
        <h2>{toDrink.strDrink}</h2>
      </div>
    </div>
  );
}

export default ToDrinkDetail;
