import React, { useContext } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import ToDoContext from '../context/ToDoContext';
//

const ToggleToDo = (toDo) => {
  const { toggleToDo } = useContext(ToDoContext);
  const toast = useToast();

  const toggle = () => {
    toggleToDo(toDo.toDo);
    const id = 4;
    if (!toast.isActive(id)) {
      toast({
        id: 4,
        title: 'Tarea completada.',
        description: 'Has marcado la tarea como completada.',
        status: 'success',
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
      });
      setTimeout(() => {
        toast.close();
      }, 5000);
    }
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
      <IconButton
        variant='ghost'
        aria-label='toggleToDo'
        icon={<CheckIcon color='green.500' />}
      />
    </Box>
  );
};

export default ToggleToDo;
