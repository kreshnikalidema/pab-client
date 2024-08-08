import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { WorkspaceContainer } from './workspace-container';
import { WorkspaceContent } from './workspace-content';
import { Component } from 'helpers/component';

interface WorkspaceProps {
  component: Component;
}

export const Workspace = observer<WorkspaceProps>((props) => {
  const { component } = props;
  return (
    <WorkspaceContainer>
      <WorkspaceContent container={component} />
    </WorkspaceContainer>
  );
});
