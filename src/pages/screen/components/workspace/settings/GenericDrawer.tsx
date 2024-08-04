import React from 'react';
import { Drawer, Toolbar, Box } from '@mui/material';

interface GenericDrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const GenericDrawer: React.FC<GenericDrawerProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box
        sx={{
          width: '50vw', // Occupies half of the viewport width
          padding: 2,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Drawer>
  );
};
