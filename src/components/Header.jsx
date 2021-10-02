import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Container, Heading, Button, Box, IconButton } from '@chakra-ui/react';
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
            <Button
              boxShadow='base'
              ml='1rem'
              w={'5%'}
              _hover={{
                bg: bgColor,
                transition: 'transform .2s',
                transform: 'scale(1.02)',
              }}
              aria-label='darkMode'
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? (
                <IconButton
                  backgroundColor={'#dfe6e9'}
                  _hover={{ bg: '#edf2f7' }}
                  aria-label='lightModeButton'
                >
                  <SunIcon color='#000' />
                </IconButton>
              ) : (
                <IconButton
                  backgroundColor={'#1a202c'}
                  _hover={{ bg: '#2c313d' }}
                  aria-label='darkModeButton'
                >
                  <MoonIcon color='#fff' />
                </IconButton>
              )}
            </Button>
            <FilterToDo />
          </Heading>
        </Box>
      </Container>
    </>
  );
};

export default Header;
