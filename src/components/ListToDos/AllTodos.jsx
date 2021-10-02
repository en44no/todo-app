import React, { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';
import Grid from './Grid';

const AllTodos = () => {
  const { toDos } = useContext(ToDoContext);
  return (
    <>
      {toDos
        ? [...toDos]
            .reverse()
            .map((toDo) => <Grid toDo={toDo} key={toDo.title} />)
        : ''}
    </>
  );
};

export default AllTodos;
