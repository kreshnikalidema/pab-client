import React, { useState, ReactNode } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material';
import { GenericDrawer } from './GenericDrawer';
import { IconButton } from '@mui/material';
import {DynamicForm} from "./DynamicForm"
import {Component} from "helpers/component"
import { observer } from 'mobx-react-lite';

interface Props {
  component: Component
}

const SettingsButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 2,
  color: 'white',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));



export const Settings: React.FC<Props> = observer(
  (props) => {
    const {component} = props
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };
  
    return (
      <>
        <SettingsButton onClick={handleDrawerOpen}>
          <SettingsIcon />
        </SettingsButton>
        <GenericDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <DynamicForm component={component} />
        </GenericDrawer>
      </>
    );
  }
);
