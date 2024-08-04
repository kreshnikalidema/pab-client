import { makeAutoObservable } from 'mobx';
import { toYaml, toTheme } from './helpers';
import {
  IComponent,
  Variables,
  Properties,
  Styles,
  Options,
  Yaml,
  Metadata,
} from './types';

export class Component implements IComponent {
  componentName: string;
  componentView: string;
  control?: string;
  variant?: string;
  variables: Variables;
  properties: Properties;
  styles: Styles;
  metadata: Metadata;
  children: IComponent[];

  constructor(options: Options) {
    this.componentName = options.componentName;
    this.componentView = options.componentView;
    this.control = options.control;
    this.variant = options.variant;
    this.variables = options.variables || {};
    this.properties = options.properties || {};
    this.styles = options.styles || {};
    this.metadata = options.metadata || {};
    this.children = options.children || [];

    makeAutoObservable(this, {
      setComponentView: false,
      componentView: false,
    });
  }

  setVariable(key: string, value: any): void {
    this.variables[key] = value;
  }

  setProperty(key: string, value: any): void {
    this.properties[key] = value;
  }

  setStyle(key: string, value: any): void {
    this.styles[key] = value;
  }

  appendChild(child: IComponent): void {
    this.children.push(child);
  }

  prependChild(child: IComponent): void {
    this.children.unshift(child);
  }

  removeChild(child: IComponent): void {
    this.children = this.children.filter((c) => c !== child);
  }

  setComponentView(view: string): void {
    this.componentView = view;
  }

  get theme(): Variables {
    return toTheme(this);
  }

  get yaml(): Yaml {
    return toYaml(this);
  }
}
