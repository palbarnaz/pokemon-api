import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/default';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
