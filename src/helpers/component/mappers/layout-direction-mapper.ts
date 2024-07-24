import { CSSProperties } from 'react';
import { LayoutDirection } from '../types';

export const layoutDirectionMapper: {
  [key in LayoutDirection]: CSSProperties['flexDirection'];
} = {
  [LayoutDirection.Horizontal]: 'row',
  [LayoutDirection.Vertical]: 'column',
};
