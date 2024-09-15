import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, styled } from '@mui/material';
import { Component } from '@/shared/store/component';
import { UIBuilderRecursive } from './ui-builder-recursive';

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
