import React from 'react';
import { DraggableGrid } from '../../../../components/draggable-grid';
import * as Icon from '@mui/icons-material';
import { SidebarContainer } from './sidebar-container';

const items = [
  { label: '1 Section', icon: Icon.ViewColumn },
  { label: '1/2 Section', icon: Icon.ViewColumn },
  { label: '1/3 Section', icon: Icon.ViewColumn },
  { label: '3/7 Section', icon: Icon.ViewColumn },
  { label: 'Button', icon: Icon.RadioButtonChecked },
  { label: 'Divider', icon: Icon.HorizontalRule },
  { label: 'Hero section', icon: Icon.ViewQuilt },
  { label: 'Text', icon: Icon.TextFields },
  { label: 'Text section', icon: Icon.FormatTextdirectionLToR },
  { label: 'Link', icon: Icon.InsertLink },
  { label: 'Image', icon: Icon.Image },
  { label: 'Video', icon: Icon.Videocam },
  { label: 'Map', icon: Icon.Map },
  { label: 'Quote', icon: Icon.FormatQuote },
  { label: 'Grid items', icon: Icon.ViewModule },
  { label: 'List items', icon: Icon.List },
];

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <DraggableGrid items={items} />
    </SidebarContainer>
  );
};
