import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#e3e3e3', '#272d38')(props),
        color: mode('black', 'white')(props),
        margin: 0,
        padding: '2rem',
        minHeight: '100vh',
      },
    }),
  },
  colors: {
    greyHover: '#edf2f7',
    greyDarkerHover: '#2c313d',
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
