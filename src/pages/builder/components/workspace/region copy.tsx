import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from 'libraries/power-apps';
import { useDrop } from 'react-dnd';
import { Box, styled } from '@mui/material';

interface WorkspaceContentProps {
  container: Component;
  children: any;
}

interface DroppedItem {
  fn: () => Component;
}






interface DroppableContainerProps {
  isOver: boolean;
}

export const DroppableContainer = styled(Box)<DroppableContainerProps>(
  ({ theme, isOver }) => ({
    backgroundColor: isOver ? theme.palette.grey[700] : theme.palette.grey[800],
    outline: `2px dashed ${isOver ? theme.palette.error.dark : theme.palette.grey[600]}`,
    color: theme.palette.grey[400],
    transition: 'background-color 0.3s, border-color 0.3s',
    height: '100%',
    width: '100%',
  })
);


export const Region: React.FC<WorkspaceContentProps> = observer((props) => {
  const { container, children } = props;

  const [{ isOver }, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item: any, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      if (item.createComponent) {
        const res = item.createComponent(item.params);
        container.appendChild(res);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <DroppableContainer ref={drop} style={toJS(container.styles)} isOver={isOver}>
      {children}
    </DroppableContainer>
  );
});
