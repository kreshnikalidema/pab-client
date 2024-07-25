import React, { useState } from 'react';
import { Drawer, Box, Typography, Fab, Toolbar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {CodeDisplay} from 'components/code-display';

const sampleJson = JSON.stringify({
  key1: 'value1',
  key2: 'value2',
  nested: {
    key3: 'value3',
  },
}, null, 2);

const sampleYaml = `
key1: value1
key2: value2
nested:
  key3: value3
`;

export const Instructions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const instructions = (
    <Box
      sx={{
        width: '50vw', // Occupies half of the viewport width
        padding: 2,
      }}
    >
      <Toolbar/>
      <Typography variant="h6">Instructions</Typography>
      <Typography paragraph>
        Here are the different instructions you can follow:
      </Typography>
      <CodeDisplay code={sampleJson} language="json" />
      <CodeDisplay code={sampleYaml} language="yaml" />
    </Box>
  );

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
        {instructions}
      </Drawer>
    </div>
  );
};


