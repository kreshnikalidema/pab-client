import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export const Header: React.FC = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap>
          POWER APPS BUILDER
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};
