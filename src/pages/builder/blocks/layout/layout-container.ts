import { styled } from 'helpers/styled';

export interface LayoutContainerVariables {}

export interface LayoutContainerProps {
  variables: LayoutContainerVariables;
}

export const LayoutContainer = styled.div<LayoutContainerProps>(() => ({
  display: 'flex',
  height: '100%',
  width: '100%',
}));
