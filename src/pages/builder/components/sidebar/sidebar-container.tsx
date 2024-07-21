import { Box, styled } from '@mui/material';

export const SidebarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  boxShadow: '2px 0 3px rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  flexShrink: 0,
  height: '100%',
  overflow: 'auto',
  padding: theme.spacing(1),
  width: 300,
}));
