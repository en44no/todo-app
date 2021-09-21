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
    console.log(allToDos);
  };

  const addToDo = (newToDo) => {
    const toDo = { title: newToDo, completed: false };
    localStorage.setItem('toDos', JSON.stringify([...toDos, toDo]));
    setToDos(JSON.stringify([...toDos, toDo]));
  };

  const removeToDo = (toDo) => {
    let toDosWithoutDeleted = toDos.filter((t) => t.title !== toDo);
    localStorage.setItem('toDos', JSON.stringify(toDosWithoutDeleted));
  };

  const toggleToDo = (toDo) => {};

  return (
    <ToDoContext.Provider
      value={{
        toDos: toDos,
        getToDos,
        addToDo,
        removeToDo,
        toggleToDo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
