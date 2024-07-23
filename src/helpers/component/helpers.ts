import React from 'react';
import { styleMapper } from './constants';
import { StyleProps } from './types';

export function transformToStyles(props: StyleProps): React.CSSProperties {
  const styles: React.CSSProperties = {};

  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const k = key as keyof StyleProps;
      const value = props[k];
      if (value !== undefined) {
        const mapperFunction = styleMapper[k];
        if (mapperFunction) {
          Object.assign(styles, mapperFunction(value as any));
        }
      }
    }
  }

  return styles;
}
