import { styled } from 'helpers/styled';

export interface SearchboxContainerVariables {}

export interface SearchboxContainerProps {
  variables: SearchboxContainerVariables;
}

export const SearchboxContainer = styled.div<SearchboxContainerProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid rgba(32, 54, 71, 1)',
  borderRadius: '4px',
  padding: '5px',
  backgroundColor: 'white',
}));
