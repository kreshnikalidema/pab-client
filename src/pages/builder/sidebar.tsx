import * as Icon from '@mui/icons-material';
import { createLayout } from './blocks/layout';
import { createSidebar } from './blocks/sidebar';
import { createLogo } from './blocks/logo';
import { createHeader } from './blocks/header';
import { createSearchbox } from './blocks/searchbox';

export const items = [
  { label: 'Layout', icon: Icon.ViewColumn, fn: createLayout },
  { label: 'Sidebar', icon: Icon.ViewColumn, fn: createSidebar },
  { label: 'Logo', icon: Icon.ViewColumn, fn: createLogo },
  { label: 'Header', icon: Icon.ViewColumn, fn: createHeader },
  {
    label: 'Button',
    icon: Icon.RadioButtonChecked,
    fn: createLogo,
  },
  { label: 'Searchbox', icon: Icon.HorizontalRule, fn: createSearchbox },
  { label: 'Hero section', icon: Icon.ViewQuilt, fn: createLogo },
  { label: 'Text', icon: Icon.TextFields, fn: createLogo },
  {
    label: 'Text section',
    icon: Icon.FormatTextdirectionLToR,
    fn: createLogo,
  },
  { label: 'Link', icon: Icon.InsertLink, fn: createLogo },
  { label: 'Image', icon: Icon.Image, fn: createLogo },
  { label: 'Video', icon: Icon.Videocam, fn: createLogo },
  { label: 'Map', icon: Icon.Map, fn: createLogo },
  { label: 'Quote', icon: Icon.FormatQuote, fn: createLogo },
  { label: 'Grid items', icon: Icon.ViewModule, fn: createLogo },
  { label: 'List items', icon: Icon.List, fn: createLogo },
];
