import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ToDoDetail({data}) {
  const [toDo, setToDo] = useState({});

  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
    .then((res) => res.json())
    .then((json) => {
      setToDo(json)
    })
    .catch(console.error);
  }, []);

  return (
    <div className='detail'>
      {/* As a player, I want to see a placeholder activity name on to do page */}
      <h2>{toDo.activity}</h2>
    </div>
  );
}

export default ToDoDetail;
