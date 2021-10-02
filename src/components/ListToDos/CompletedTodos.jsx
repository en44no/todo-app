import React, { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';
import Grid from './Grid';

const CompletedTodos = () => {
  const { toDos } = useContext(ToDoContext);

  const completedTodos = toDos.filter((t) => t.completed === true);

  return (
    <>
      {completedTodos
        ? [...completedTodos]
            .reverse()
            .map((toDo) => <Grid toDo={toDo} key={toDo.title} />)
        : ''}
    </>
  );
};

export default CompletedTodos;
