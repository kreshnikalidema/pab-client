import React from 'react';
import { Grid } from '@mui/material';
import { useDrag } from 'react-dnd';
import { DraggablePaper } from './draggable-paper';
import { DraggablePlaceholder } from './draggable-placeholder';
import { DraggableIcon } from './draggable-icon';
import { DraggableText } from './draggable-text';

interface Item {
  label: string;
  icon: React.ElementType;
}

interface DraggableItemProps {
  item: Item;
  paperColor?: string;
  iconColor?: string;
  textColor?: string;
}

export const DraggableItem: React.FC<DraggableItemProps> = (props) => {
  const { item, paperColor, iconColor, textColor } = props;

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'COMPONENT',
    item: { label: item.label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (isDragging) {
    return (
      <Grid item xs={4} key={item.label}>
        <DraggablePlaceholder />
      </Grid>
    );
  }

  return (
    <Grid item xs={4} key={item.label} ref={drag}>
      <DraggablePaper ref={preview} color={paperColor}>
        <DraggableIcon color={iconColor} as={item.icon} />
        <DraggableText color={textColor}>{item.label}</DraggableText>
      </DraggablePaper>
    </Grid>
  );
};
