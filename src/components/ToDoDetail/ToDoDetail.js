import React from 'react';

const ErrorElement = () => {
  return <div className='error'><h2>Content Not Found :(</h2></div>
}

function ToDoDetail({toDo, err}) {
  if (err) {
    return <ErrorElement />
  }
  
  return (
    <div className='toDoShowBox'>
      {/* show placeholder content from ToDo component*/}
      <h2>{toDo.activity}</h2>
    </div>
  );
}

export default ToDoDetail;
