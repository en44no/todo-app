import React, { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';
import Grid from './Grid';

const PendingTodos = () => {
  const { toDos } = useContext(ToDoContext);

  const pendingTodos = toDos.filter((t) => t.completed === false);

  return (
    <>
      {pendingTodos
        ? [...pendingTodos]
            .reverse()
            .map((toDo) => <Grid toDo={toDo} key={toDo.title} />)
        : ''}
    </>
  );
};

export default PendingTodos;
