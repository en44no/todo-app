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

const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const { getToDos, addToDo } = useContext(ToDoContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function createToDo() {
    addToDo(inputValue);
    setInputValue('');
    getToDos();
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
            size='lg'
            boxShadow='base'
            placeholder='Crea una nueva tarea...'
            fontSize='1rem'
            onChange={handleChange}
            value={inputValue}
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
