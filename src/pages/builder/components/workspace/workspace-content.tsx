import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { DroppableZone } from '../../../../components/droppable-zone';

interface WorkspaceContentProps {
  container: any;
}

export const WorkspaceContent = observer<WorkspaceContentProps>((props) => {
  const { container } = props;

  const onDrop = React.useCallback((item: any) => {
    console.log('WorkspaceContent', item);
  }, []);

  return (
    <DroppableZone onDrop={onDrop}>
      {container.Children?.length ? (
        // @ts-ignore
        container.Children.map((child, index) => (
          <WorkspaceContent key={index} container={child} />
        ))
      ) : (
        <Typography variant="body2">
          Drop components here and start building your app.
        </Typography>
      )}
    </DroppableZone>
  );
});
