import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { WorkspaceContainer } from './workspace-container';
import { WorkspaceContent } from './workspace-content';
import { Component } from 'libraries/power-apps';

interface WorkspaceProps {
  container: Component;
}

export const Workspace = observer<WorkspaceProps>((props) => {
  const { container } = props;
  return (
    <WorkspaceContainer>
      <WorkspaceContent container={container} />
    </WorkspaceContainer>
  );
});
