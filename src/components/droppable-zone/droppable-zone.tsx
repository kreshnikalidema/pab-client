import * as React from 'react';
import { useDrop } from 'react-dnd';
import {
  DroppableContainer1,
  DroppableContainer2,
} from './droppable-container';

interface DroppableZoneProps<T = unknown> {
  children?: React.ReactNode;
  onDrop?: (item: T) => void;
  style: any;
  first: boolean;
}

export const DroppableZone = <T,>(props: DroppableZoneProps<T>) => {
  const { onDrop, children, style, first } = props;

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

  if (first) {
    return (
      <DroppableContainer1 ref={drop} isOver={isOver} style={style}>
        {children}
      </DroppableContainer1>
    );
  }

  return (
    <DroppableContainer2 ref={drop} isOver={isOver} style={style}>
      {children}
    </DroppableContainer2>
  );
};
