import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { UIBuilderPage } from './ui-builder/ui-builder-page';
import { theme } from './theme';

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <UIBuilderPage />
      </DndProvider>
    </ThemeProvider>
  );
};
