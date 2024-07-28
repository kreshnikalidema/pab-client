import { CSSProperties } from 'react';

export type IProperties<T> = {
  [K in keyof T]?: T[K];
};

export interface IYamlCode<T> {
  Control?: string;

  Variant?: string;

  Properties: IProperties<T>;

  Children?: IYaml<T>[];
}

export interface IYaml<T> {
  [componentName: string]: IYamlCode<T>;
}

export interface IComponent<T = {}> {
  componentName: string;

  control?: string;

  variant?: string;

  properties: IProperties<T>;

  cssProperties: CSSProperties;

  children: IComponent<T>[];

  setProperty<K extends keyof T>(key: K, value: string): void;

  setCssProperty<K extends keyof CSSProperties>(key: K, value: CSSProperties[K]): void;

  appendChild(child: IComponent<T>): void;

  prependChild(child: IComponent<T>): void;

  removeChild(child: IComponent<T>): void;

  readonly style: CSSProperties;

  readonly yaml: IYaml<T>;
}

export interface IOptions<T> {
  componentName: string;

  control?: string;

  variant?: string;

  properties?: IProperties<T>;

  cssProperties?: CSSProperties;

  children?: IComponent<T>[];
}
