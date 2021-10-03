import React, { useContext } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import ToDoContext from '../context/ToDoContext';
import Notification from './Notification';

const RemoveToDo = (toDo) => {
  const { removeToDo } = useContext(ToDoContext);

  const remove = () => {
    removeToDo(toDo.toDo.title);
    Notification('Tarea eliminada.', 'Has eliminado la tarea.', 'success');
  };

  return (
    <Box
      onClick={() => {
        remove();
      }}
      _hover={{
        transition: 'transform .2s',
        transform: 'scale(1.05)',
      }}
    >
      <IconButton
        variant='ghost'
        aria-label='removeButton'
        icon={<DeleteIcon color='red.500' />}
      />
    </Box>
  );
};

export default RemoveToDo;
