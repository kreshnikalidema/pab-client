import { Paper, styled } from '@mui/material';

export const DraggablePaper = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color || theme.palette.grey[800],
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: 100,
  justifyContent: 'center',
  padding: theme.spacing(1),
  textAlign: 'center',
  transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.2s',
}));
