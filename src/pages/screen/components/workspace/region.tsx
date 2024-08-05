import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from '@app/helpers/component';
import { useDrop } from 'react-dnd';
import { Box, styled } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Settings } from './settings';

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

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s',
}));

const Overlay1 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 1,
  transition: 'opacity 0.3s',
  border: `1px dashed #999999`,
}));

const SettingsButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  zIndex: 2,
  color: 'white',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const Region: React.FC<WorkspaceContentProps> = observer((props) => {
  const { container, children } = props;

  const [drawerOpen, setDrawerOpen] = React.useState(false);

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

  const onDoubleClickHandler = (e: any) => {
    // e.stopPropagation();
    setDrawerOpen(true)
};

const onDrawerOpen = (value: boolean) => {
  setDrawerOpen(value)
};
  

  const styles = {
    ...toJS(container.styles),
    position: 'relative',
  } as any;

  return (
    <div ref={drop} style={styles} onDoubleClick={onDoubleClickHandler}>
      <Overlay1>
        <Overlay style={{ opacity: isOver ? 1 : 0 }}>
          <Typography variant="h5" textAlign="center">Drag and drop UI blocks here.</Typography>
        </Overlay>
        <Settings component={container} drawerOpen={drawerOpen}  onDrawerOpen={onDrawerOpen}/>
      </Overlay1>
      {children}
    </div>
  );
});
