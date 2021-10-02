import { Container } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';
import AllTodos from './AllTodos';
import CompletedTodos from './CompletedTodos';
import PendingTodos from './PendingToDos';

const ListToDos = () => {
  const { selectedValue } = useContext(ToDoContext);

  return (
    <>
      <Container maxW='container.md'>
        {selectedValue === 'all' && <AllTodos />}
        {selectedValue === 'completed' && <CompletedTodos />}
        {selectedValue === 'pending' && <PendingTodos />}
      </Container>
    </>
  );
};

export default ListToDos;
