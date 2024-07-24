import { CSSProperties } from 'react';
import { LayoutAlignItems } from '../types';

export const layoutAlignItemsMapper: {
  [key in LayoutAlignItems]: CSSProperties['alignItems'];
} = {
  [LayoutAlignItems.Start]: 'flex-start',
  [LayoutAlignItems.Center]: 'center',
  [LayoutAlignItems.End]: 'flex-end',
  [LayoutAlignItems.Stretch]: 'stretch',
};
