import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { DroppableZone } from 'components/droppable-zone';
import { Component } from 'libraries/power-apps';

interface WorkspaceContentProps {
  container: Component;
  // first: boolean;
}

interface DroppedItem {
  fn: () => Component;
}

export const WorkspaceContent: React.FC<WorkspaceContentProps> = observer((props) => {
  const { container } = props;

  const onDrop = React.useCallback(
    (item: DroppedItem) => {
      container.appendChild(item.fn());
    },
    [container]
  );

  switch (container.control) {
    case 'GroupContainer':
    case 'Gallery': {
      return (
        <DroppableZone onDrop={onDrop} style={container.style}>
          {container.children.map((child, index) => (
            <WorkspaceContent key={index} container={child} />
          ))}
        </DroppableZone>
      );
    }

    case 'Image': {
      return <img style={container.style} src="https://picsum.photos/640" />;
    }

    case 'Label': {
      // @ts-ignore
      return <span style={container.style}>{container.properties.Text}</span>;
    }

    default: {
      return null;
    }
  }
});
