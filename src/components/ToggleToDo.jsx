import React, { useContext } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import ToDoContext from '../context/ToDoContext';
//

const ToggleToDo = (toDo) => {
  const { toggleToDo } = useContext(ToDoContext);
  const toast = useToast();

  const toggle = () => {
    toggleToDo(toDo.toDo);
    toast({
      title: toDo.toDo.completed ? 'Tarea completada.' : 'Tarea pendiente.',
      description: `Has marcado la tarea como ${
        toDo.toDo.completed ? 'completada.' : 'pendiente.'
      }`,
      status: toDo.toDo.completed ? 'success' : 'warning',
      duration: 5000,
      position: 'bottom-right',
      isClosable: true,
    });
    setTimeout(() => {
      toast.close();
    }, 5000);
  };

  return (
    <Box
      onClick={() => {
        toggle();
      }}
      position={'absolute'}
      right={'4rem'}
      _hover={{
        transition: 'transform .2s',
        transform: 'scale(1.05)',
      }}
    >
      {toDo.toDo.completed ? (
        <IconButton
          variant='ghost'
          aria-label='toggleToDoToPending'
          icon={<CloseIcon color='yellow.500' fontSize='0.75rem' mt='0.2rem' />}
        />
      ) : (
        <IconButton
          variant='ghost'
          aria-label='toggleToDoToCompleted'
          icon={<CheckIcon color='green.500' />}
        />
      )}
    </Box>
  );
};

export default ToggleToDo;
