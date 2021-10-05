import React, { useState, useContext } from 'react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import ToDoContext from '../context/ToDoContext';
import Notification from './Notification';

const EditToDo = ({ toDoToEdit }) => {
  const [value, setValue] = useState(toDoToEdit);
  const { toDos, editToDo } = useContext(ToDoContext);

  const oldTitle = toDoToEdit;

  const editToDoPrivate = (oldTitle, newTitle) => {
    if (oldTitle !== newTitle && newTitle !== '') {
      if (!toDos.find((t) => t.title === newTitle)) {
        Notification(
          'Tarea editada correctamente.',
          'Has editado la tarea.',
          'success'
        );
        editToDo(oldTitle, newTitle);
      } else {
        Notification(
          'Error al crear la tarea.',
          'Ya tienes una tarea con esa descripción.',
          'warning'
        );
        editToDo(oldTitle, oldTitle);
        setValue(oldTitle);
      }
    }
    if (newTitle === '') {
      setValue(oldTitle);
      Notification(
        'Error al editar tarea.',
        'Debes agregar un título la tarea.',
        'error'
      );
    }
  };
  return (
    <>
      <Editable value={value} onSubmit={() => editToDoPrivate(oldTitle, value)}>
        <EditablePreview />
        <EditableInput
          onChange={(e) => setValue(e.target.value)}
          _focus={{ border: 'none' }}
        />
      </Editable>
    </>
  );
};

export default EditToDo;