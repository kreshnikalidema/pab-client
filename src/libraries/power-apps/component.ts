import { CSSProperties } from 'react';
import { makeAutoObservable, toJS } from 'mobx';
import { IComponent, IProperties, IOptions, IYaml } from './types';

export class Component<T = {}> implements IComponent<T> {
  componentName: string;
  control?: string;
  variant?: string;
  properties: IProperties<T>;
  children: IComponent<T>[];
  cssProperties: CSSProperties;

  constructor(options: IOptions<T>) {
    this.componentName = options.componentName;
    this.control = options.control;
    this.variant = options.variant;
    this.properties = options.properties || {};
    this.children = options.children || [];
    this.cssProperties = options.cssProperties || {};
    makeAutoObservable(this);
  }

  setProperty<K extends keyof T>(key: K, value: string): void {
    this.properties[key as keyof T] = `=${value}` as unknown as T[keyof T];
  }

  setCssProperty<K extends keyof CSSProperties>(key: K, value: CSSProperties[K]): void {
    this.cssProperties[key] = value;
  }

  appendChild(component: Component<T>): void {
    this.children.push(component);
  }

  prependChild(component: Component<T>): void {
    this.children.unshift(component);
  }

  removeChild(component: Component<T>): void {
    this.children = this.children.filter((child) => child !== component);
  }

  get style() {
    return toJS(this.cssProperties);
  }

  get yaml(): IYaml<T> {
    if (this.children.length === 0) {
      return toJS({
        [this.componentName]: {
          Control: this.control,
          Variant: this.variant,
          Properties: this.properties,
        },
      });
    }

    return toJS({
      [this.componentName]: {
        Control: this.control,
        Variant: this.variant,
        Properties: this.properties,
        Children: this.children.map((child) => child.yaml),
      },
    });
  }
}
