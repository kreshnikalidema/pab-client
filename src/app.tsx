import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { theme } from './theme';
import { StoreProvider } from './store';
import { Home } from './pages/home';
import { Screen } from './pages/screen';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <CssBaseline />
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="screen" element={<Screen />} />
            </Routes>
          </BrowserRouter>
        </DndProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};
