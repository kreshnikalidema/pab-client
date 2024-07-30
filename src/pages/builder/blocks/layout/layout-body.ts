import { styled } from 'helpers/styled';

export interface LayoutBodyVariables {
  layoutBodyFill: string;
}

export interface LayoutBodyProps {
  variables: LayoutBodyVariables;
}

export const LayoutBody = styled.div<LayoutBodyProps>(({ variables }) => ({
  backgroundColor: variables.layoutBodyFill,
  flexGrow: 1,
}));
