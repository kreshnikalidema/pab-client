import { CSSProperties } from 'react';
import { LayoutJustifyContent } from '../types';

export const layoutJustifyContentMapper: {
  [key in LayoutJustifyContent]: CSSProperties['justifyContent'];
} = {
  [LayoutJustifyContent.Start]: 'flex-start',
  [LayoutJustifyContent.End]: 'flex-end',
  [LayoutJustifyContent.Center]: 'center',
  [LayoutJustifyContent.SpaceBetween]: 'space-between',
  [LayoutJustifyContent.SpaceAround]: 'space-around',
};
