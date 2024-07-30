import { styled } from 'helpers/styled';

export interface HeaderRightVariables {}

export interface HeaderRightProps {
  variables: HeaderRightVariables;
}

export const HeaderRight = styled.div<HeaderRightProps>(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  justifyContent: 'flex-end',
}));
