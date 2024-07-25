import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { DroppableZone } from 'components/droppable-zone';
import { Component } from 'libraries/power-apps';

interface WorkspaceContentProps {
  container: Component;
  first: boolean;
}

export const WorkspaceContent = observer<WorkspaceContentProps>((props) => {
  const { container, first } = props;

  const onDrop = React.useCallback(
    (item: any) => {
      container.appendChild(item.fn());
    },
    [container]
  );

  // @ts-ignore
  if (container.properties?.Text) {
    return (
      <span style={container.styles}>
        {/* @ts-ignore */}
        {container.properties?.Text}
      </span>
    );
  }

  return (
    <DroppableZone onDrop={onDrop} style={container.styles} first={first}>
      {container.children.map((child, index) => (
        <WorkspaceContent key={index} container={child} first={false} />
      ))}
    </DroppableZone>
  );
});
