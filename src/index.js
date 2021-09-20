import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
import { ColorModeScript } from '@chakra-ui/color-mode';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  </React.StrictMode>,
  document.getElementById('root')
);
