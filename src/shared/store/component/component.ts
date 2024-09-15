import { makeAutoObservable } from 'mobx';
import { Helpers } from './helpers';
import { ComponentInterface, ComponentOptions, ComponentView } from './types';

export class Component<
  V extends Record<string, any> = Record<string, any>,
  P extends Record<string, any> = Record<string, any>,
  S extends Record<string, any> = Record<string, any>,
  M extends Record<string, any> = Record<string, any>,
> implements ComponentInterface<V, P, S, M>
{
  name: string;
  view: ComponentView<V, P, S, M>;
  control: string;
  variant?: string;
  variables: V;
  properties: P;
  styles: S;
  metadata: M;
  children: Component<V, P, S, M>[];

  constructor(options: ComponentOptions<V, P, S, M>) {
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

  appendChild(child: Component<V, P, S, M>) {
    this.children.push(child);
  }

  prependChild(child: Component<V, P, S, M>) {
    this.children.unshift(child);
  }

  removeChild(child: Component<V, P, S, M>) {
    this.children = this.children.filter((c) => c !== child);
  }

  get theme() {
    return Helpers.toTheme(this);
  }

  get yaml() {
    return Helpers.toYaml(this);
  }
}
