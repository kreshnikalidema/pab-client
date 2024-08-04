import React from 'react';
import { Toolbar } from '@mui/material';
import { SidebarContainer } from './sidebar-container';

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { children } = props;

  return (
    <SidebarContainer anchor="left" variant="permanent">
      <Toolbar />
      {children}
    </SidebarContainer>
  );
};
