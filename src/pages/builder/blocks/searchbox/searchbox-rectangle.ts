import { styled } from 'helpers/styled';

export interface SearchboxContainerVariables {}

export interface SearchboxContainerProps {
  variables: SearchboxContainerVariables;
}

export const SearchboxRectangle = styled.div<SearchboxContainerProps>(
  () => ({})
);
