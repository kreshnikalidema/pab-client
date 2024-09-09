import { makeAutoObservable } from 'mobx';
import { Helpers } from './helpers';
import {
  IComponent,
  Options,
  Variables,
  Properties,
  View,
  Styles,
  Metadata,
  Yaml,
} from './types';

export class Component<
  V extends Variables = Variables,
  P extends Properties = Properties,
  S extends Styles = Styles,
  M extends Metadata = Metadata,
> implements IComponent<V, P, S, M>
{
  name: string;
  view: View<V, P, S, M>;
  control: string;
  variant?: string;
  variables: V;
  properties: P;
  styles: S;
  metadata: M;
  children: IComponent<V, P, S, M>[];

  constructor(options: Options<V, P, S, M>) {
    this.name = options.name;
    this.view = options.view;
    this.control = options.control;
    this.variant = options.variant;

    this.variables = {} as V;
    this.properties = {} as P;
    this.styles = {} as S;
    this.metadata = {} as M;
    this.children = [];

    makeAutoObservable(this, {
      view: false,
    });
  }

  setVariable<K extends keyof V>(key: K, value: V[K]) {
    this.variables[key] = value;
  }

  setProperty<K extends keyof P>(key: K, value: P[K]) {
    this.properties[key] = value;
  }

  setStyle<K extends keyof S>(key: K, value: S[K]) {
    this.styles[key] = value;
  }

  setMetadata<K extends keyof M>(key: K, value: M[K]) {
    this.metadata[key] = value;
  }

  appendChild(child: IComponent<V, P, S, M>) {
    this.children.push(child);
  }

  prependChild(child: IComponent<V, P, S, M>) {
    this.children.unshift(child);
  }

  removeChild(child: IComponent<V, P, S, M>) {
    this.children = this.children.filter((c) => c !== child);
  }

  get theme(): V {
    return Helpers.toTheme(this) as V;
  }

  get yaml(): Yaml {
    return Helpers.toYaml(this) as Yaml;
  }
}
