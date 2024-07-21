import { Box, styled } from '@mui/material';

export const WorkspaceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  padding: theme.spacing(3),
}));
