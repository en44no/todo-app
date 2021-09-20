import {
  Container,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Spinner,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React, { useState, useContext } from 'react';
import ToDoContext from '../context/ToDoContext';

const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const { toDos, getToDos, addToDo } = useContext(ToDoContext);
  const toast = useToast();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      createToDo();
    }
  };

  function createToDo() {
    if (inputValue !== '') {
      if (!toDos.find((t) => t.title === inputValue)) {
        setInputValue('');
        addToDo(inputValue);
        getToDos();
        const id = 1;
        if (!toast.isActive(id)) {
          toast({
            id: 1,
            title: 'Tarea creada.',
            description: 'Has creado la tarea con éxito.',
            status: 'success',
            duration: 5000,
            position: 'bottom-right',
            isClosable: true,
          });
          setTimeout(() => {
            toast.close();
          }, 5000);
        }
      } else {
        const id = 2;
        if (!toast.isActive(id)) {
          toast({
            id: 2,
            title: 'Error al crear la tarea.',
            description: 'Ya tienes una tarea con esa descripción.',
            status: 'warning',
            duration: 5000,
            position: 'bottom-right',
            isClosable: true,
          });
          setTimeout(() => {
            toast.close();
          }, 5000);
        }
      }
    } else {
      const id = 3;
      if (!toast.isActive(id)) {
        toast({
          id: 3,
          title: 'Error al crear tarea.',
          description: 'Debes agregar una descripción.',
          status: 'error',
          duration: 5000,
          position: 'bottom-right',
          isClosable: true,
        });
        setTimeout(() => {
          toast.close();
        }, 5000);
      }
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
