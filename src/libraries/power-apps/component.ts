import { makeAutoObservable } from 'mobx';
import { toYaml, toTheme } from './helpers';
import {
  IComponent,
  IProperties,
  IVariables,
  IStyles,
  IOptions,
  IYaml,
} from './types';

export class Component implements IComponent {
  componentName: string;
  componentView: string;
  control?: string;
  variant?: string;
  properties: IProperties;
  styles: IStyles;
  variables: IVariables;
  children: IComponent[];

  constructor(options: IOptions) {
    this.componentName = options.componentName;
    this.componentView = options.componentView;
    this.control = options.control;
    this.variant = options.variant;
    this.properties = options.properties || {};
    this.styles = options.styles || {};
    this.variables = options.variables || {};
    this.children = options.children || [];

    makeAutoObservable(this, {
      setComponentView: false,
      componentView: false,
    });
  }

  setProperty(key: string, value: any): void {
    this.properties[key] = value;
  }

  setStyle(key: string, value: any): void {
    this.styles[key] = value;
  }

  setVariable(key: string, value: any): void {
    this.variables[key] = value;
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

  get theme(): IVariables {
    return toTheme(this);
  }

  get yaml(): IYaml {
    return toYaml(this);
  }
}
