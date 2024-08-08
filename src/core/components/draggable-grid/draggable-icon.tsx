import { styled } from '@mui/material';

export const DraggableIcon = styled('div')(({ theme, color }) => ({
  color: color || theme.palette.success.main,
  fontSize: 40,
}));
