import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Container,
  Heading,
  Button,
  Select,
  Box,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';

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
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? (
                <IconButton
                  backgroundColor={'#dfe6e9'}
                  _hover={{ bg: '#edf2f7' }}
                >
                  <SunIcon color='#000' />
                </IconButton>
              ) : (
                <IconButton
                  backgroundColor={'#1a202c'}
                  _hover={{ bg: '#2c313d' }}
                >
                  <MoonIcon color='#fff' />
                </IconButton>
              )}
            </Button>
            <Select
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
              <option value='option1' defaultValue>
                Todas
              </option>
              <option value='option2'>Completadas</option>
              <option value='option3'>Pendientes</option>
            </Select>
          </Heading>
        </Box>
      </Container>
    </>
  );
};

export default Header;
