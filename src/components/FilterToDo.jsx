import React, { useContext } from 'react';
import { Select } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import ToDoContext from '../context/ToDoContext';

const FilterToDo = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? '#2c313d' : '#edf2f7';
  const { setSelectValue } = useContext(ToDoContext);

  const checkValue = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <Select
        onChange={(event) => checkValue(event)}
        cursor='pointer'
        _hover={{
          bg: bgColor,
          transition: 'transform .2s',
          transform: 'scale(1.02)',
        }}
        _focus={{ border: 'none' }}
        border='none'
        w={['100%', '37%', '25%']}
        mt={['0.8rem', '0rem']}
        mb={['0.8rem', '0rem']}
        borderRadius='lg'
        borderEndEndRadius='none'
        borderEndStartRadius='none'
        boxShadow='base'
        float='right'
      >
        <option value='all'>Todas</option>
        <option value='completed'>Completadas</option>
        <option value='pending'>Pendientes</option>
      </Select>
    </>
  );
};

export default FilterToDo;
