import { CSSProperties } from 'react';
import { LayoutOverflow } from '../types';

export const layoutOverflowMapper: {
  [key in LayoutOverflow]: CSSProperties['overflowX'] &
    CSSProperties['overflowY'];
} = {
  [LayoutOverflow.Hidden]: 'hidden',
  [LayoutOverflow.Scroll]: 'scroll',
};
