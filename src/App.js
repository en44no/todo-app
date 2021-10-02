import { ChakraProvider } from '@chakra-ui/react';
import AddToDo from './components/AddToDo';
import Header from './components/Header';

import theme from './theme';
import React from 'react';

// Context
import ToDoState from './context/ToDoState';
import List from './components/ListToDos/List';

function App() {
  return (
    <ToDoState>
      <ChakraProvider theme={theme}>
        <Header />
        <AddToDo />
        <List />
      </ChakraProvider>
    </ToDoState>
  );
}

export default App;
