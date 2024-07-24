import { CSSProperties } from 'react';
import { styleMapper } from '../mappers';
import {Properties, StyleMapper} from "../types"



export function transformToStyles<T>(properties: Properties<T>) {
  const styles: CSSProperties = {};

  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      const k = key as keyof T;
      const value = properties[k];
      if (value !== undefined) {
        const mapperFunction = (styleMapper as StyleMapper<T>)[k];
        if (mapperFunction) {
          Object.assign(styles, mapperFunction(value as never));
        }
      }
    }
  }

  return styles;
}