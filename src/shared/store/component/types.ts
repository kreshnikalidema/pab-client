import * as React from 'react';

export interface Properties {
  [key: string]: any;
}

export interface Variables {
  [key: string]: any;
}

export interface Styles {
  [key: string]: any;
}

export interface Metadata {
  [key: string]: any;
}

export interface YamlCode {
  Control?: string;
  Variant?: string;
  Properties: Properties;
  Children?: Yaml[];
}

export interface Yaml {
  [name: string]: YamlCode;
}

export interface IComponent<
  V extends Variables = Variables,
  P extends Properties = Properties,
  S extends Styles = Styles,
  M extends Metadata = Metadata,
> {
  name: string;
  view: View<V, P, S, M>;
  control: string;
  variant?: string;
  variables: V;
  properties: P;
  styles: S;
  metadata: M;
  children: IComponent<V, P, S, M>[];
  setProperty<K extends keyof P>(key: K, value: P[K]): void;
  setStyle<K extends keyof S>(key: K, value: S[K]): void;
  setVariable<K extends keyof V>(key: K, value: V[K]): void;
  setMetadata<K extends keyof M>(key: K, value: M[K]): void;
  appendChild(child: IComponent<V, P, S, M>): void;
  prependChild(child: IComponent<V, P, S, M>): void;
  removeChild(child: IComponent<V, P, S, M>): void;
  readonly theme: V;
  readonly yaml: Yaml;
}

export interface Options<
  V extends Variables = Variables,
  P extends Properties = Properties,
  S extends Styles = Styles,
  M extends Metadata = Metadata,
> {
  name: string;
  view: View<V, P, S, M>;
  control: string;
  variant?: string;
}

export type ViewProps<
  V extends Variables = Variables,
  P extends Properties = Properties,
  S extends Styles = Styles,
  M extends Metadata = Metadata,
> = {
  component: IComponent<V, P, S, M>;
};

export type View<
  V extends Variables = Variables,
  P extends Properties = Properties,
  S extends Styles = Styles,
  M extends Metadata = Metadata,
> = React.FC<ViewProps>;
