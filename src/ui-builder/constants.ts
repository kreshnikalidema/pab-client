import * as Icon from '@mui/icons-material';
import { Component } from '@/shared/store/component';
import { Label } from './elements/label';
import { createSidebar } from './blocks/sidebar';

interface Item {
  label: string;
  icon: React.ElementType;
  createComponent: () => Component;
}

export const blocks: Item[] = [
  {
    label: 'Layout',
    icon: Icon.ViewColumn,
    createComponent: createLayout,
  },
  {
    label: 'Sidebar',
    icon: Icon.ViewColumn,
    createComponent: createSidebar,
  },
];

export const component = new Component({
  name: '__Root__',
  view: () => null,
  variables: {},
  properties: {},
  styles: {
    backgroundColor: '#393939',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0',
  },
});
