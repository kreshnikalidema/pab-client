import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from './components/sidebar';
import { Workspace } from './components/workspace';

export const Builder: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Workspace />
    </Box>
  );
};
