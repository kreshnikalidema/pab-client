import * as React from 'react';
import { WorkspaceContainer } from './workspace-container';
import { WorkspaceContent } from './workspace-content';

import { VerticalContainer } from '../../state/components/vertical-container';

const verticalContainer = new VerticalContainer({
  Fill: 'red',
  FillPortions: 1,
  Children: [],
});

export const Workspace: React.FC = () => {
  return (
    <WorkspaceContainer>
      <WorkspaceContent container={verticalContainer} />
    </WorkspaceContainer>
  );
};
