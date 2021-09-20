import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    black: '#000',
    white: '#dfe6e9',
    greyHover: '#edf2f7',
    greyDarkerHover: '#2c313d',
  },
  styles: {
    global: (props) => ({
      body: {
        margin: 0,
        padding: '2rem',
        minHeight: '100vh',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none' },
      },
    },
  },
});

export default theme;
