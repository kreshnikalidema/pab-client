import styledComponent from '@emotion/styled';
import { ComponentType } from 'react';
import { Interpolation, Theme } from '@emotion/react';

const commonProps: Record<string, boolean> = {
  alt: true,
  src: true,
  height: true,
  width: true,
  className: true,
  id: true,
  style: true,
  title: true,
  children: true,
  placeholder: true,
};

const shouldForwardProp = (propName: string) => !!commonProps[propName];

const config = { shouldForwardProp };

function createIntrinsicStyledComponent<T extends object>(
  element: keyof JSX.IntrinsicElements
) {
  return (styles: Interpolation<T & { theme: Theme }>) =>
    styledComponent(element, config)<T>(styles);
}

function createCustomStyledComponent<T extends object>(
  component: ComponentType<T>
) {
  return (styles: Interpolation<T & { theme: Theme }>) =>
    styledComponent(component, config)<T>(styles);
}

export const styled = {
  div: <T extends object>(styles: Interpolation<T & { theme: Theme }>) =>
    createIntrinsicStyledComponent<T>('div')(styles),

  img: <T extends object>(styles: Interpolation<T & { theme: Theme }>) =>
    createIntrinsicStyledComponent<T>('img')(styles),

  input: <T extends object>(styles: Interpolation<T & { theme: Theme }>) =>
    createIntrinsicStyledComponent<T>('input')(styles),

  span: <T extends object>(styles: Interpolation<T & { theme: Theme }>) =>
    createIntrinsicStyledComponent<T>('span')(styles),

  p: <T extends object>(styles: Interpolation<T & { theme: Theme }>) =>
    createIntrinsicStyledComponent<T>('p')(styles),

  custom: <T extends object>(
    component: ComponentType<T>,
    styles: Interpolation<T & { theme: Theme }>
  ) => createCustomStyledComponent<T>(component)(styles),
};
