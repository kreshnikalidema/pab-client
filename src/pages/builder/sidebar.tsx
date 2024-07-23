import * as Icon from '@mui/icons-material';
import { createContainer, createContainer2 } from './create-container';

export const items = [
  { label: '1 Section', icon: Icon.ViewColumn, fn: createContainer },
  { label: '1/2 Section', icon: Icon.ViewColumn, fn: createContainer2 },
  { label: '1/3 Section', icon: Icon.ViewColumn, fn: createContainer2 },
  { label: '3/7 Section', icon: Icon.ViewColumn, fn: createContainer2 },
  { label: 'Button', icon: Icon.RadioButtonChecked, fn: createContainer2 },
  { label: 'Divider', icon: Icon.HorizontalRule, fn: createContainer2 },
  { label: 'Hero section', icon: Icon.ViewQuilt, fn: createContainer2 },
  { label: 'Text', icon: Icon.TextFields, fn: createContainer2 },
  {
    label: 'Text section',
    icon: Icon.FormatTextdirectionLToR,
    fn: createContainer2,
  },
  { label: 'Link', icon: Icon.InsertLink, fn: createContainer2 },
  { label: 'Image', icon: Icon.Image, fn: createContainer2 },
  { label: 'Video', icon: Icon.Videocam, fn: createContainer2 },
  { label: 'Map', icon: Icon.Map, fn: createContainer2 },
  { label: 'Quote', icon: Icon.FormatQuote, fn: createContainer2 },
  { label: 'Grid items', icon: Icon.ViewModule, fn: createContainer2 },
  { label: 'List items', icon: Icon.List, fn: createContainer2 },
];