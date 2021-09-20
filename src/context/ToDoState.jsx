import React, { useState } from 'react';
import ToDoContext from './ToDoContext';

const ToDoState = (props) => {
  const [toDos, setToDos] = useState([]);

  const getToDos = () => {
    let allToDos = JSON.parse(localStorage.getItem('toDos'));
    if (allToDos != null) {
      setToDos(allToDos);
    } else {
      setToDos([]);
    }
  };

  const addToDo = (newToDo) => {
    const toDo = { title: newToDo };
    localStorage.setItem('toDos', JSON.stringify([...toDos, toDo]));
    setToDos(JSON.stringify([...toDos, toDo]));
  };

  const removeToDo = (toDo) => {
    let ToDosWithoutDeleted = toDos.filter((t) => t.title !== toDo);
    localStorage.setItem('toDos', JSON.stringify(ToDosWithoutDeleted));
  };

  return (
    <ToDoContext.Provider
      value={{
        toDos: toDos,
        getToDos,
        addToDo,
        removeToDo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
