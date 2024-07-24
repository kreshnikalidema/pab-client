import { CSSProperties } from 'react';
import { LayoutWrap } from '../types';

export const layoutWrapMapper: {
  [key in LayoutWrap]: CSSProperties['flexWrap'];
} = {
  [LayoutWrap.Wrap]: 'wrap',
  [LayoutWrap.NoWrap]: 'nowrap',
};
