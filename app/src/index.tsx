import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import { Rotas } from './Routes';
import { ThemeProvider } from '@material-tailwind/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Rotas />
    </ThemeProvider>
  </React.StrictMode>
);
