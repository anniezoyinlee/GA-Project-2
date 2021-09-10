import React from 'react';
import { Route } from "react-router-dom";
import Buttons from '../Buttons/Buttons'

function ToDo() {
  let activity = 'activity'
  return (
    <div>
      <Route path="/to-do" excat render={() => 
          <Buttons thing={activity}/>
      } />
    </div>
  );
}

export default ToDo;
