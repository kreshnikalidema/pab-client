import * as React from 'react';
import { WorkspaceContainer } from './workspace-container';
import { WorkspaceContent } from './workspace-content';
import { createVerticalContainer } from 'libraries/power-apps/components';

const container = createVerticalContainer();

export const Workspace: React.FC = () => {
  return (
    <WorkspaceContainer>
      <WorkspaceContent container={container} first />
    </WorkspaceContainer>
  );
};
