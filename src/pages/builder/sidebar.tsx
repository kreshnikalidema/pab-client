import * as Icon from '@mui/icons-material';
import { createLayout } from './blocks/layout';
import { createHeader } from './blocks/header';

export const items = [
  { label: '1 Section', icon: Icon.ViewColumn, fn: createLayout },
  { label: '1/2 Section', icon: Icon.ViewColumn, fn: createLayout },
  { label: '1/3 Section', icon: Icon.ViewColumn, fn: createLayout },
  { label: '3/7 Section', icon: Icon.ViewColumn, fn: createLayout },
  {
    label: 'Button',
    icon: Icon.RadioButtonChecked,
    fn: createHeader,
  },
  { label: 'Divider', icon: Icon.HorizontalRule, fn: createHeader },
  { label: 'Hero section', icon: Icon.ViewQuilt, fn: createHeader },
  { label: 'Text', icon: Icon.TextFields, fn: createHeader },
  {
    label: 'Text section',
    icon: Icon.FormatTextdirectionLToR,
    fn: createHeader,
  },
  { label: 'Link', icon: Icon.InsertLink, fn: createHeader },
  { label: 'Image', icon: Icon.Image, fn: createHeader },
  { label: 'Video', icon: Icon.Videocam, fn: createHeader },
  { label: 'Map', icon: Icon.Map, fn: createHeader },
  { label: 'Quote', icon: Icon.FormatQuote, fn: createHeader },
  { label: 'Grid items', icon: Icon.ViewModule, fn: createHeader },
  { label: 'List items', icon: Icon.List, fn: createHeader },
];
