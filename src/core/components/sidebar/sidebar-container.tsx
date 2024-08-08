import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

export const SidebarContainer = styled(Drawer)(() => ({
  flexShrink: 0,
  width: drawerWidth,
  overflow: 'auto',

  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth,
  },
}));
