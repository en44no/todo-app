import React, { useState, useContext } from 'react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import ToDoContext from '../context/ToDoContext';

const EditToDo = ({ toDoToEdit }) => {
  const [value, setValue] = useState(toDoToEdit);
  const { editToDo } = useContext(ToDoContext);

  const oldTitle = toDoToEdit;

  const editToDoPrivate = (oldTitle, newTitle) => {
    editToDo(oldTitle, newTitle);
  };
  return (
    <>
      <Editable
        value={value ? value : 'Enter a value'}
        onSubmit={() => editToDoPrivate(oldTitle, value)}
      >
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
