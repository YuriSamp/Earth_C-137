import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Rotas } from './Routes';
import { ThemeProvider } from '@material-tailwind/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Rotas />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
