import { styled } from 'helpers/styled';

export interface HeaderLeftVariables {}

export interface HeaderLeftProps {
  variables: HeaderLeftVariables;
}

export const HeaderLeft = styled.div<HeaderLeftProps>(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  justifyContent: 'flex-start',
}));
