import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Drawer, Box, Typography, Fab, Toolbar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { CodeDisplay } from 'components/code-display';
import { stringify } from 'yaml';

import { Component } from 'libraries/power-apps';

interface InstructionsProps {
  container: Component;
}

export const Instructions = observer<InstructionsProps>((props) => {
  const { container } = props;

  const [isOpen, setIsOpen] = useState(false);

  const json = container.yaml.Test.Children;

  const yaml = stringify(json);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="open instructions"
        onClick={toggleDrawer(true)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <InfoIcon />
      </Fab>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          sx={{
            width: '50vw', // Occupies half of the viewport width
            padding: 2,
          }}
        >
          <Toolbar />
          <Typography variant="h6">Instructions</Typography>
          <Typography paragraph>Here are the different instructions you can follow:</Typography>
          <CodeDisplay code={JSON.stringify(json)} language="json" />
          <CodeDisplay code={yaml} language="yaml" />
        </Box>
      </Drawer>
    </div>
  );
});
