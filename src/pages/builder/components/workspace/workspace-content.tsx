import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Component } from 'libraries/power-apps';
import { useDrop } from 'react-dnd';

interface WorkspaceContentProps {
  container: Component;
}

interface DroppedItem {
  fn: () => Component;
}

export const WorkspaceContent: React.FC<WorkspaceContentProps> = observer(
  (props) => {
    const { container } = props;

    const variables = container.theme;

    const [{ isOver }, drop] = useDrop({
      accept: 'COMPONENT',
      drop: (item: any, monitor) => {
        if (monitor.didDrop()) {
          return;
        }

        if (item.fn) {
          container.appendChild(item.fn());
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    });

    const renderChildren = React.useCallback(
      (childContainer: Component) => (
        <WorkspaceContent
          container={childContainer}
          key={childContainer.componentName}
        />
      ),
      []
    );

    if (
      container.control === 'Image' ||
      container.control === 'Classic/TextInput'
    ) {
      return <container.View variables={variables} ref={drop} />;
    }

    return (
      <container.View variables={variables} ref={drop}>
        {container.children.map(renderChildren)}
      </container.View>
    );
  }
);
