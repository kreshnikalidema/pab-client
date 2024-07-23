import * as React from 'react';
import { WorkspaceContainer } from './workspace-container';
import { WorkspaceContent } from './workspace-content';
import { createContainer } from '../../create-container';

const container = createContainer();

export const Workspace: React.FC = () => {
  return (
    <WorkspaceContainer>
      <WorkspaceContent container={container} />
    </WorkspaceContainer>
  );
};
