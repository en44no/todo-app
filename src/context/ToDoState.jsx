import React, { useState, useEffect } from 'react';
import ToDoContext from './ToDoContext';

const ToDoState = (props) => {
  const [toDos, setToDos] = useState([]);
  const [selectedValue, setSelectedValue] = useState('all');
  //
  useEffect(() => {
    let data = localStorage.getItem('toDos');
    if (data != null) {
      setToDos(JSON.parse(data));
    } else {
      setToDos([{ title: 'Esta es una tarea de ejemplo.', completed: false }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (newToDo) => {
    setToDos([...toDos, { title: newToDo, completed: false }]);
  };

  const removeToDo = (toDo) => {
    setToDos(toDos.filter((t) => t.title !== toDo));
  };

  const toggleToDo = (toDo) => {
    setToDos(
      toDos.map((t) =>
        t.title === toDo.title ? { ...t, completed: !toDo.completed } : t
      )
    );
  };

  const setSelectValue = (value) => {
    setSelectedValue(value);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDos: toDos,
        addToDo,
        removeToDo,
        toggleToDo,
        selectedValue: selectedValue,
        setSelectValue,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
