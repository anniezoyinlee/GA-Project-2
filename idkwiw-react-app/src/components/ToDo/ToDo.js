import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToDoDetail from '../ToDoDetail/ToDoDetail'

function ToDo() {
  let activity = 'an activity'
  let toDoLink = '/to-do'
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
    <Route path="/to-do" exact render={() => (
      <div className='page'>
        {toDo.map((activityObj, idx) => {
          return(
            <ToDoDetail 
            toDo={activityObj}
            key={idx}
            />
          )
        })}
        <Buttons 
        generate={getActivity} 
        thing={activity}
        page={toDoLink}
        />
      </div>
    )} />
  );
}

export default ToDo;
