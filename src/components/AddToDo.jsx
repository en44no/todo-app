import {
  Container,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Spinner,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React, { useState, useContext } from 'react';
import ToDoContext from '../context/ToDoContext';
import Notification from './Notification';

const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const { toDos, addToDo, selectedValue } = useContext(ToDoContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      createToDo();
    }
  };

  const createToDoSuccess = (text, isCompleted) => {
    setInputValue('');
    addToDo(text, isCompleted);
  };

  const formatText = (string) => {
    let newString = string[0].toUpperCase() + string.slice(1);
    console.log(newString);
    return newString;
  };

  function createToDo() {
    if (inputValue !== '') {
      const text = formatText(inputValue.trim());
      if (!toDos.find((t) => t.title === text.trim())) {
        if (selectedValue === 'completed') {
          createToDoSuccess(text, true);
          Notification(
            'Tarea creada.',
            'Has creado la tarea como completada.',
            'success'
          );
        } else {
          createToDoSuccess(text, false);
          Notification('Tarea creada.', 'Has creado la tarea.', 'success');
        }
      } else {
        Notification(
          'Error al crear la tarea.',
          'Ya tienes una tarea con esa descripción.',
          'warning'
        );
      }
    } else {
      Notification(
        'Error al crear tarea.',
        'Debes agregar una descripción.',
        'error'
      );
    }
  }

  return (
    <>
      <Container
        maxW={'container.md'}
        mt={4}
        _hover={{
          transition: 'transform .2s',
          transform: 'scale(1.02)',
        }}
      >
        <InputGroup>
          {inputValue.length > 0 ? (
            <InputLeftElement
              pointerEvents='none'
              pt={'0.5rem'}
              color='gray.300'
              fontSize='1rem'
              children={<Spinner />}
            />
          ) : (
            ''
          )}
          )
          <Input
            border='none'
            autoFocus
            size='lg'
            boxShadow='base'
            placeholder='Crea una nueva tarea...'
            fontSize='1rem'
            onChange={handleChange}
            value={inputValue}
            onKeyUp={enterPressed}
            _focus={{ border: 'none' }}
          />
          <InputRightElement
            onClick={createToDo}
            pt={'0.5rem'}
            pr={'1.5rem'}
            _hover={{
              transition: 'transform .2s',
              transform: 'scale(1.05)',
            }}
            children={
              <IconButton
                _focus={{ outline: 0 }}
                variant='ghost'
                aria-label='addTodo'
                icon={<AddIcon color='blue.500' />}
              />
            }
          />
        </InputGroup>
      </Container>
    </>
  );
};

export default AddToDo;
