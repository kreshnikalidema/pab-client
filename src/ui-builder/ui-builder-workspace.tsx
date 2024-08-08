import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, styled } from '@mui/material';
import { UIBuilderRecursive } from './ui-builder-recursive';
import { Component } from './helpers/component';

interface Props {
  component: Component;
}

export const UIBuilderContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  width: '100%',
}));

export const UIBuilderWorkspace = observer<Props>((props) => {
  const { component } = props;
  return (
    <UIBuilderContainer>
      <UIBuilderRecursive container={component} />
    </UIBuilderContainer>
  );
});
