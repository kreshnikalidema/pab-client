import { CSSProperties } from 'react';
import { styleMapper } from './mappers/style-mapper';
import { StyleProps } from './types';

export function transformToStyles(props: StyleProps): CSSProperties {
  const styles: CSSProperties = {};

  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const k = key as keyof StyleProps;
      const value = props[k];
      if (value !== undefined) {
        const mapperFunction = styleMapper[k];
        if (mapperFunction) {
          Object.assign(styles, mapperFunction(value as never));
        }
      }
    }
  }

  return styles;
}
