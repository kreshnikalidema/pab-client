import { Paper, styled } from '@mui/material';

export const DraggablePlaceholder = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  border: `2px dashed ${theme.palette.grey[500]}`,
  color: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: 100,
  justifyContent: 'center',
  padding: theme.spacing(1),
  textAlign: 'center',
}));
