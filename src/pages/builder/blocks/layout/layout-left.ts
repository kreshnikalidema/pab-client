import { styled } from 'helpers/styled';
import { DroppableZone } from 'components/droppable-zone';

export interface LayoutLeftVariables {
  layoutLeftWidth: number;
  layoutLeftFill: string;
}

export interface LayoutLeftProps {
  variables: LayoutLeftVariables;
}

export const LayoutLeft = styled.div<LayoutLeftProps>(({ variables }) => ({
  backgroundColor: variables.layoutLeftFill.toLowerCase(),
  width: `${variables.layoutLeftWidth}px`,
}));
