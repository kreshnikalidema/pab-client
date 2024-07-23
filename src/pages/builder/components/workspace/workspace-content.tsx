import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { DroppableZone } from 'components/droppable-zone';
import { Component } from 'helpers/component';

import { createContainer } from '../../create-container';

interface WorkspaceContentProps {
  container: Component;
}

export const WorkspaceContent = observer<WorkspaceContentProps>((props) => {
  const { container } = props;

  const onDrop = React.useCallback(
    (item: any) => {
      container.appendChild(item.fn());
    },
    [container]
  );

  return (
    <DroppableZone onDrop={onDrop}>
      {container.children?.length ? (
        container.children.map((child, index) => (
          <div key={index} style={container.styles}>
            <WorkspaceContent container={child} />
          </div>
        ))
      ) : (
        <div style={container.styles}>
          <Typography variant="body2">
            Drop components here and start building your app.
          </Typography>
        </div>
      )}
    </DroppableZone>
  );
});
