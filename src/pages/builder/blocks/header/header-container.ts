import { styled } from 'helpers/styled';

export interface HeaderContainerVariables {}

export interface HeaderContainerProps {
  variables: HeaderContainerVariables;
}

export const HeaderContainer = styled.div<HeaderContainerProps>(() => ({
  display: 'flex',
  height: '60px',
}));
