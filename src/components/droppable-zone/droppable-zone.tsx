import * as React from 'react';
import { useDrop } from 'react-dnd';
import { DroppableContainer } from './droppable-container';

interface DroppableZoneProps<T = unknown> {
  children?: React.ReactNode;
  onDrop?: (item: T) => void;
}

export const DroppableZone = <T,>(props: DroppableZoneProps<T>) => {
  const { onDrop, children } = props;

  const [{ isOver }, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item: T, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      onDrop?.(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <DroppableContainer ref={drop} isOver={isOver}>
      {children}
    </DroppableContainer>
  );
};
