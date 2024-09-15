import * as React from 'react';

export interface YamlCode {
  Control?: string;
  Variant?: string;
  Properties: Record<string, any>;
  Children?: Yaml[];
}

export interface Yaml {
  [name: string]: YamlCode;
}

export interface ComponentInterface<
  V extends Record<string, any> = Record<string, any>,
  P extends Record<string, any> = Record<string, any>,
  S extends Record<string, any> = Record<string, any>,
  M extends Record<string, any> = Record<string, any>,
> {
  name: string;
  view: ComponentView<V, P, S, M>;
  control: string;
  variant?: string;
  variables: V;
  properties: P;
  styles: S;
  metadata: M;
  children: ComponentInterface<V, P, S, M>[];
  setProperty<K extends keyof P>(key: K, value: P[K]): void;
  setStyle<K extends keyof S>(key: K, value: S[K]): void;
  setVariable<K extends keyof V>(key: K, value: V[K]): void;
  setMetadata<K extends keyof M>(key: K, value: M[K]): void;
  appendChild(child: ComponentInterface<V, P, S, M>): void;
  prependChild(child: ComponentInterface<V, P, S, M>): void;
  removeChild(child: ComponentInterface<V, P, S, M>): void;
  readonly theme: V;
  readonly yaml: Yaml;
}

export interface ComponentOptions<
  V extends Record<string, any> = Record<string, any>,
  P extends Record<string, any> = Record<string, any>,
  S extends Record<string, any> = Record<string, any>,
  M extends Record<string, any> = Record<string, any>,
> {
  name: string;
  view: ComponentView<V, P, S, M>;
  control: string;
  variant?: string;
}

export type ComponentView<
  V extends Record<string, any> = Record<string, any>,
  P extends Record<string, any> = Record<string, any>,
  S extends Record<string, any> = Record<string, any>,
  M extends Record<string, any> = Record<string, any>,
> = React.FC<{ component: ComponentInterface<V, P, S, M> }>;
