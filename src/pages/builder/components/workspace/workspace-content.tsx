import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { DroppableZone } from 'components/droppable-zone';
import { Component } from 'helpers/component';

interface WorkspaceContentProps {
  container: Component;
}

// const rowComponent = new Component({
//   LayoutDirection: 'row',
//   LayoutJustify: 'space-between',
//   LayoutAlignItems: 'center',
//   Height: 60,
//   PaddingTop: 10,
//   PaddingBottom: 10,
//   PaddingLeft: 10,
//   PaddingRight: 10,
//   BorderColor: '#ccc',
//   BorderThickness: 1,
//   BorderStyle: 'solid',
// });
//   const columnComponent = new Component({
//   Flex: 1,
//   Padding: 10,
// });
//   const titleComponent = new Component({
//   Color: '#333',
//   FontSize: 24,
// });
//   const contentComponent = new Component({
//   Color: '#666',
//   FontSize: 16,
// });

export const WorkspaceContent = observer<WorkspaceContentProps>((props) => {
  const { container } = props;

  const onDrop = React.useCallback(
    (item: any) => {
      container.appendChild(item.fn());
    },
    [container]
  );

  // return (
  //   <div style={rowComponent.styles}>
  //     <div style={columnComponent.styles}>
  //       <h1 style={titleComponent.styles}>Title</h1>
  //     </div>
  //     <div style={columnComponent.styles}>
  //       <p style={contentComponent.styles}>Content goes here.</p>
  //     </div>
  //   </div>
  // );

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
    <DroppableZone onDrop={onDrop} style={container.styles}>
      {container.children.map((child, index) => (
        <WorkspaceContent key={index} container={child} />
      ))}
    </DroppableZone>
  );
});
