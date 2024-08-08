import React from 'react';
import { SidebarContainer } from './sidebar-container';

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { children } = props;

  return (
    <SidebarContainer anchor="left" variant="permanent">
      {children}
    </SidebarContainer>
  );
};
