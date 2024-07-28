import { Box, styled } from '@mui/material';

interface DroppableContainerProps {
  isOver: boolean;
}

export const DroppableContainer = styled(Box)<DroppableContainerProps>(({ theme, isOver }) => ({
  // backgroundColor: isOver ? theme.palette.grey[700] : theme.palette.grey[800],
  border: `2px dashed ${isOver ? theme.palette.error.dark : theme.palette.grey[600]}`,
  color: theme.palette.grey[400],
  transition: 'background-color 0.3s, border-color 0.3s',
}));
