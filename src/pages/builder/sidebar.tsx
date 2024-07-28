import * as Icon from '@mui/icons-material';
import { createLayout } from './blocks/layout';
import { createSidebar } from './blocks/sidebar';
import { createProfileCard } from './blocks/profile-card';
import { createMenu } from './blocks/menu';

export const items = [
  { label: '1 Section', icon: Icon.ViewColumn, fn: createLayout },
  { label: '1/2 Section', icon: Icon.ViewColumn, fn: createSidebar },
  { label: '1/3 Section', icon: Icon.ViewColumn, fn: createProfileCard },
  { label: '3/7 Section', icon: Icon.ViewColumn, fn: createMenu },
  {
    label: 'Button',
    icon: Icon.RadioButtonChecked,
    fn: createSidebar,
  },
  { label: 'Divider', icon: Icon.HorizontalRule, fn: createSidebar },
  { label: 'Hero section', icon: Icon.ViewQuilt, fn: createSidebar },
  { label: 'Text', icon: Icon.TextFields, fn: createSidebar },
  {
    label: 'Text section',
    icon: Icon.FormatTextdirectionLToR,
    fn: createSidebar,
  },
  { label: 'Link', icon: Icon.InsertLink, fn: createSidebar },
  { label: 'Image', icon: Icon.Image, fn: createSidebar },
  { label: 'Video', icon: Icon.Videocam, fn: createSidebar },
  { label: 'Map', icon: Icon.Map, fn: createSidebar },
  { label: 'Quote', icon: Icon.FormatQuote, fn: createSidebar },
  { label: 'Grid items', icon: Icon.ViewModule, fn: createSidebar },
  { label: 'List items', icon: Icon.List, fn: createSidebar },
];
