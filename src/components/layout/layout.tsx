import React from 'react';
import { LayoutContainer } from './layout-container';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { Main } from '../main';

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { sidebar, children } = props;
  return (
    <LayoutContainer>
      <Header />
      <Sidebar>{sidebar}</Sidebar>
      <Main>{children}</Main>
    </LayoutContainer>
  );
};
