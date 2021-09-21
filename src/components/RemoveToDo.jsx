import React, { useContext } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import ToDoContext from '../context/ToDoContext';

const RemoveToDo = (toDo) => {
  const { getToDos, removeToDo } = useContext(ToDoContext);
  const toast = useToast();

  const remove = () => {
    removeToDo(toDo.toDo.title);
    toast({
      title: 'Tarea eliminada.',
      description: 'Has eliminado la tarea.',
      status: 'success',
      duration: 5000,
      position: 'bottom-right',
      isClosable: true,
    });
    setTimeout(() => {
      toast.close();
    }, 5000);
    getToDos();
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
      <IconButton variant='ghost' icon={<DeleteIcon color='red.500' />} />
    </Box>
  );
};

export default RemoveToDo;
