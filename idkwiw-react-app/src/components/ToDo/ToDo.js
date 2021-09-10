import React from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'
import TodoDetail from '../TodoDetail/TodoDetail'

function ToDo() {
  let activity = 'activity'
  return (
    <Route path="/to-do" excat render={() => (
      <div className='page'>
        <TodoDetail data={activity}/>
        <Buttons thing={activity}/>
      </div>
    )} />
  );
}

export default ToDo;
