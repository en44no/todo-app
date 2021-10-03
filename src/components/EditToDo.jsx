import React, { useState, useContext } from 'react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import ToDoContext from '../context/ToDoContext';
import Notification from './Notification';

const EditToDo = ({ toDoToEdit }) => {
  const [value, setValue] = useState(toDoToEdit);
  const { editToDo } = useContext(ToDoContext);

  const oldTitle = toDoToEdit;

  const editToDoPrivate = (oldTitle, newTitle) => {
    if (oldTitle !== newTitle && newTitle !== '') {
      Notification(
        'Tarea editada correctamente.',
        'Has editado la tarea.',
        'success'
      );
      editToDo(oldTitle, newTitle);
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
