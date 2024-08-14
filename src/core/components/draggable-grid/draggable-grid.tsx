import React from 'react';
import { Box, Grid } from '@mui/material';
import { DraggableItem } from './draggable-item';

interface Item {
  label: string;
  icon: React.ElementType;
}

interface DraggableGridProps {
  items: Item[];
  paperColor?: string;
  iconColor?: string;
  textColor?: string;
}

export const DraggableGrid: React.FC<DraggableGridProps> = (props) => {
  const { items, paperColor, iconColor, textColor } = props;
  return (
    <Box sx={{ flexGrow: 1, padding: '3px' }}>
      <Grid container spacing={0.5}>
        {items.map((item) => (
          <DraggableItem
            paperColor={paperColor}
            iconColor={iconColor}
            textColor={textColor}
            key={item.label}
            item={item}
          />
        ))}
      </Grid>
    </Box>
  );
};
