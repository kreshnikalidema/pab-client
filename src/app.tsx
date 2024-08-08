import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { theme } from './theme';
import { Screen } from './screen';

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Screen />
      </DndProvider>
    </ThemeProvider>
  );
};
