import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { WorkspaceContainer } from './workspace-container';
import { WorkspaceContent } from './workspace-content';
import { ScreenStore } from '../../screen-store';

interface WorkspaceProps {
  screenStore: ScreenStore;
}

export const Workspace = observer<WorkspaceProps>((props) => {
  const { screenStore } = props;
  return (
    <WorkspaceContainer>
      <WorkspaceContent container={screenStore.component} />
    </WorkspaceContainer>
  );
});
