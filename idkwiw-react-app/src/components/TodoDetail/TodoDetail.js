import React from "react";

function ToDoDetail({activity}) {
  return (
    <div className='detail'>
      {/* As a player, I want to see a placeholder activity name on to do page */}
      <h2>{activity.activity}</h2>
    </div>
  );
}

export default ToDoDetail;
