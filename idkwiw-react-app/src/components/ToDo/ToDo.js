import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import ToDoDetail from '../ToDoDetail/ToDoDetail'

function ToDo() {
  // showing on the generate button/prop: thing in Buttons component
  let activity = 'activity'
  // prop: page in Buttons component
  let toDoLink = '/to-do'

  const [toDo, setToDo] = useState([
    // As a player, I want to see a placeholder activity name on to do page
    {
    "activity": "Learn React"
    }
  ]);

  // function to get api
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
