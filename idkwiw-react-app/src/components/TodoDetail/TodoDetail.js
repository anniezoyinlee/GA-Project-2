import React from "react";

function ToDoDetail({toDo}) {
  return (
    <div className='detail'>
      {/* As a player, I want to see a placeholder activity name on to do page */}
      <h2>{toDo.activity}</h2>
    </div>
  );
}

export default ToDoDetail;
