import { Container, Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import ToDoContext from '../context/ToDoContext';
import RemoveToDo from './RemoveToDo';
import ToggleToDo from './ToggleToDo';

const ListToDos = () => {
  const { toDos, getToDos } = useContext(ToDoContext);

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      <Container maxW='container.md'>
        {toDos
          ? [...toDos].reverse().map((toDo) => (
              <Grid
                key={toDo.title}
                templateColumns='repeat(5, 1fr)'
                gap={4}
                alignItems='center'
                w='100%'
                borderWidth='1px'
                borderRadius='lg'
                boxShadow='base'
                p={4}
                mt={4}
                border='none'
                position='relative'
                _hover={{
                  transition: 'transform .2s',
                  transform: 'scale(1.02)',
                }}
              >
                <GridItem colSpan={4}>
                  <Box fontSize='1rem'>{toDo.title}</Box>
                </GridItem>
                <GridItem colStart={6} colEnd={6}>
                  <ToggleToDo toDo={toDo} />
                  <RemoveToDo toDo={toDo} />
                </GridItem>
              </Grid>
            ))
          : ''}
      </Container>
    </>
  );
};

export default ListToDos;
