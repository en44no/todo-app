import React, { useContext } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import ToDoContext from '../context/ToDoContext';
import Notification from './Notification';
//

const ToggleToDo = (toDo) => {
  const { toggleToDo } = useContext(ToDoContext);

  const toggle = () => {
    toggleToDo(toDo.toDo);
    Notification(
      toDo.toDo.completed ? 'Tarea pendiente.' : 'Tarea completada.',
      `Has marcado la tarea como ${
        toDo.toDo.completed ? 'pendiente.' : 'completada.'
      }`,
      toDo.toDo.completed ? 'warning' : 'success'
    );
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
