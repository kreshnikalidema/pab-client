import React from 'react';
import { Typography } from '@mui/material';
import { HeaderLink } from './header-link';

export const HeaderLinks: React.FC = () => {
  return (
    <>
      <Typography component={HeaderLink} variant="body1" to="/link1">
        Link 1
      </Typography>
      <Typography component={HeaderLink} variant="body1" to="/link2">
        Link 2
      </Typography>
      <Typography component={HeaderLink} variant="body1" to="/link3">
        Link 3
      </Typography>
    </>
  );
};
