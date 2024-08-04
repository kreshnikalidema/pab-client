import { styled } from '@mui/material';

export const DraggableText = styled('div')(({ theme, color }) => ({
  color: color || theme.palette.text.primary,
  fontSize: theme.typography.body2.fontSize,
}));
