import React, { useContext } from 'react';
import { Text } from '@chakra-ui/react';
import ToDoContext from '../context/ToDoContext';

const ToDoCounter = (props) => {
  const { toDos } = useContext(ToDoContext);
  const completedTodos = toDos.filter((t) => t.completed === true).length;
  const pendingTodos = toDos.filter((t) => t.completed === false).length;

  return (
    <>
      <Text
        textAlign={{ base: 'center', md: 'left', lg: 'left' }}
        fontSize='1.03rem'
        mt='1rem'
        mb='-0.5rem'
        ml='0.2rem'
        fontWeight='400'
      >
        Tienes
        <span
          style={{
            color: props.type === 'pendientes' ? '#D69E2E' : '#38A169',
            fontWeight: '600',
          }}
        >
          {props.type === 'pendientes' ? (
            <span> {pendingTodos} </span>
          ) : (
            <span> {completedTodos} </span>
          )}
        </span>
        {(props.type === 'pendientes' && pendingTodos === 1) ||
        (props.type === 'completadas' && completedTodos === 1)
          ? 'tarea '
          : 'tareas '}
        {props.type === 'completadas'
          ? props.type === 'completadas' && completedTodos === 1
            ? `completada.`
            : `${props.type}.`
          : props.type === 'pendientes' && pendingTodos === 1
          ? `pendiente.`
          : `${props.type}.`}
      </Text>
    </>
  );
};

export default ToDoCounter;
