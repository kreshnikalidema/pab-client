import { makeAutoObservable } from 'mobx';
import { toYaml, toTheme, Noop } from './helpers';
import { IComponent, IProperties, IVariables, IOptions, IYaml } from './types';

export class Component<T = unknown, P = unknown> implements IComponent<T, P> {
  componentName: string;
  componentView?: React.FC<any>;
  control?: string;
  variant?: string;
  properties: IProperties<T>;
  variables: IVariables<P>;
  children: IComponent<any, any>[];

  constructor(options: IOptions<T, P>) {
    this.componentName = options.componentName;
    this.componentView = options.componentView;
    this.control = options.control;
    this.variant = options.variant;
    this.properties = options.properties || {};
    this.variables = options.variables || {};
    this.children = options.children || [];

    makeAutoObservable(this, {
      setComponentView: false,
      componentView: false,
    });
  }

  setProperty<K extends keyof T>(key: K, value: string): void {
    this.properties[key as keyof T] = `=${value}` as unknown as T[keyof T];
  }

  setVariable<K extends keyof P>(key: K, value: P[K]): void {
    this.variables[key as keyof P] = value;
  }

  appendChild<U, V>(child: IComponent<U, V>): void {
    this.children.push(child);
  }

  prependChild<U, V>(child: IComponent<U, V>): void {
    this.children.unshift(child);
  }

  removeChild<U, V>(child: IComponent<U, V>): void {
    this.children = this.children.filter((c) => c !== child);
  }

  setComponentView(view: React.FC<any>): void {
    this.componentView = view;
  }

  get theme(): IVariables<P> {
    return toTheme(this as IComponent<T, P>);
  }

  get yaml(): IYaml<T, P> {
    return toYaml(this as IComponent<T, P>);
  }

  get View(): React.FC<any> {
    return this.componentView ?? Noop;
  }
}
