import { makeAutoObservable } from 'mobx';
import { IComponent, IProperties, IOptions, IYaml, IVariables } from './types';
import { toYaml, toTheme } from './helpers';

export class Component<T = unknown, P = unknown> implements IComponent<T, P> {
  componentName: string;
  control?: string;
  variant?: string;
  properties: IProperties<T>;
  variables: IVariables<P>;
  children: IComponent[];

  constructor(options: IOptions<T, P>) {
    this.componentName = options.componentName;
    this.control = options.control;
    this.variant = options.variant;
    this.properties = options.properties || {};
    this.variables = options.variables || {};
    this.children = options.children || [];
    makeAutoObservable(this);
  }

  setProperty<K extends keyof T>(key: K, value: string): void {
    this.properties[key as keyof T] = `=${value}` as unknown as T[keyof T];
  }

  setVariable<K extends keyof P>(key: K, value: P[K]): void {
    this.variables[key as keyof P] = value;
  }

  appendChild(component: IComponent): void {
    this.children.push(component);
  }

  prependChild(component: IComponent): void {
    this.children.unshift(component);
  }

  removeChild(component: IComponent): void {
    this.children = this.children.filter((child) => child !== component);
  }

  get theme(): IVariables<P> {
    return toTheme(this as IComponent<T, P>);
  }

  get yaml(): IYaml<T, P> {
    return toYaml(this as IComponent<T, P>);
  }
}
