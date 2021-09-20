import { ChakraProvider } from '@chakra-ui/react';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import ListToDos from './components/ListToDos';
import theme from './theme';
import React from 'react';

// Context
import ToDoState from './context/ToDoState';

function App() {
  return (
    <ToDoState>
      <ChakraProvider theme={theme}>
        <Header />
        <AddToDo />
        <ListToDos />
      </ChakraProvider>
    </ToDoState>
  );
}

export default App;
