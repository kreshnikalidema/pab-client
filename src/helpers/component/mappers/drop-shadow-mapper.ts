import { CSSProperties } from 'react';
import { DropShadow } from '../types';

export const dropShadowMapper: {
  [key in DropShadow]: CSSProperties['boxShadow'];
} = {
  [DropShadow.None]: 'none',
  [DropShadow.Light]: '1px 1px 3px rgba(0,0,0,0.1)',
  [DropShadow.SemiLight]: '1px 1px 5px rgba(0,0,0,0.2)',
  [DropShadow.Regular]: '2px 2px 6px rgba(0,0,0,0.3)',
  [DropShadow.SemiBold]: '2px 2px 8px rgba(0,0,0,0.4)',
  [DropShadow.Bold]: '3px 3px 10px rgba(0,0,0,0.5)',
  [DropShadow.ExtraBold]: '4px 4px 12px rgba(0,0,0,0.6)',
};
