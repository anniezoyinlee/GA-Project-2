import React from "react";

function ToDoDetail({toDo}) {
  return (
    <div className='toDoShowBox'>
      {/* show placeholder content from ToDo component*/}
      <h2>{toDo.activity}</h2>
    </div>
  );
}

export default ToDoDetail;
