import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToDoDetail from '../ToDoDetail/ToDoDetail'

function ToDo() {
  let activity = 'activity'
  const [toDo, setToDo] = useState([
    {
    "activity": "Learn React"
  }]);

  const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity')
    .then((res) => res.json())
    .then((json) => {
      setToDo([json])
    })
  }

  return (
    <Route path="/to-do" excat render={() => (
      <div className='page'>
        {toDo.map((activity, idx) => {
          return(
            <ToDoDetail 
            activity={activity}
            key={idx}
            />
          )
        })}
        <Buttons 
        generate={getActivity} 
        thing={activity}
        />
      </div>
    )} />
  );
}

export default ToDo;
