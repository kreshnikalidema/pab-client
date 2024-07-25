import { Box, styled } from '@mui/material';

interface DroppableContainerProps {
  isOver: boolean;
}

export const DroppableContainer1 = styled(Box)<DroppableContainerProps>(
  ({ theme, isOver }) => ({
    // backgroundColor: isOver ? theme.palette.grey[700] : theme.palette.grey[800],
    border: `2px dashed ${isOver ? theme.palette.error.dark : theme.palette.grey[600]}`,
    color: theme.palette.grey[400],
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    transition: 'background-color 0.3s, border-color 0.3s',
  })
);

export const DroppableContainer2 = styled(Box)<DroppableContainerProps>(
  ({ theme, isOver }) => ({
    // backgroundColor: isOver ? theme.palette.grey[700] : theme.palette.grey[800],
    border: `2px dashed ${isOver ? theme.palette.error.dark : theme.palette.grey[600]}`,
    color: theme.palette.grey[400],
    textAlign: 'center',
    transition: 'background-color 0.3s, border-color 0.3s',
  })
);
