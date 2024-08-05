import React, { useState, ReactNode } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material';
import { GenericDrawer } from './GenericDrawer';
import { IconButton } from '@mui/material';
import {DynamicForm} from "./DynamicForm"
import {Component} from "helpers/component"
import { observer } from 'mobx-react-lite';

interface Props {
  component: Component;
  drawerOpen: boolean;
  onDrawerOpen: (value: boolean) => void
}

const SettingsButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 2,
  color: theme.palette.grey[800],
  backgroundColor: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
  },
}));



export const Settings: React.FC<Props> = observer(
  (props) => {
    const {component, drawerOpen, onDrawerOpen } = props
    

    const handleDrawerOpen = () => {
      onDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      onDrawerOpen(false);
    };
  
    return (
      <>
        <SettingsButton onClick={handleDrawerOpen} size='small'>
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
