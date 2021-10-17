import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Container, Heading, Button, Box } from '@chakra-ui/react';
import React from 'react';
import FilterToDo from './FilterToDo';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? '#2c313d' : '#edf2f7';
  return (
    <>
      <Container maxW={'container.md'}>
        <Box d={'block'}>
          <Heading as='h2' size='xl'>
            Mis tareas
            {colorMode === 'light' ? (
              <Button
                boxShadow='base'
                aria-label='lightModeButton'
                bg='ligth'
                ml='1rem'
                w={'5%'}
                _hover={{
                  bg: bgColor,
                  transition: 'transform .2s',
                  transform: 'scale(1.02)',
                  boxShadow: 'base',
                }}
                _focus={{ boxShadow: 'base' }}
                onClick={toggleColorMode}
              >
                <SunIcon color='#000' />
              </Button>
            ) : (
              <Button
                boxShadow='base'
                ml='1rem'
                w={'5%'}
                bg='dark'
                _hover={{
                  bg: bgColor,
                  transition: 'transform .2s',
                  transform: 'scale(1.02)',
                }}
                _focus={{ boxShadow: 'base' }}
                aria-label='darkMode'
                onClick={toggleColorMode}
              >
                <MoonIcon color='#fff' />
              </Button>
            )}
            <FilterToDo />
          </Heading>
        </Box>
      </Container>
    </>
  );
};

export default Header;
