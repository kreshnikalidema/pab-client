import { makeAutoObservable, toJS } from 'mobx';
import { IComponent, IProperties, IOptions, IYaml, IYamlCode } from './types';

export class Component<T = unknown> implements IComponent<T> {
  componentName: string;
  control?: string;
  variant?: string;
  properties: IProperties<T>;
  children: IComponent[];

  constructor(options: IOptions<T>) {
    this.componentName = options.componentName;
    this.control = options.control;
    this.variant = options.variant;
    this.properties = options.properties || {};
    this.children = options.children || [];
    makeAutoObservable(this);
  }

  setProperty<K extends keyof T>(key: K, value: string): void {
    this.properties[key as keyof T] = `=${value}` as unknown as T[keyof T];
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

  get yaml(): IYaml<T> {
    const yamlCode: IYamlCode<T> = {
      Control: this.control,
      Variant: this.variant,
      Properties: this.properties,
      Children: this.children.map((child) => child.yaml),
    };

    return toJS({
      [this.componentName]: yamlCode,
    });
  }
}
