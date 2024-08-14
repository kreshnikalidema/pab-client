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
  componentView?: string;
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
    this.properties[key] = `=${value}`;
  }

  setMetadata(key: string, value: any): void {
    this.metadata[key] = value;
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

export function createContainer(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'region',
    control: 'GroupContainer',
    variant: 'manualLayoutContainer',
  });
}

export function createHorizontalContainer(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'div',
    control: 'GroupContainer',
    variant: 'horizontalAutoLayoutContainer',
  });
}

export function createVerticalContainer(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'div',
    control: 'GroupContainer',
    variant: 'verticalAutoLayoutContainer',
  });
}

export function createImage(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'image',
    control: 'Image',
  });
}

export function createLabel(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'label',
    control: 'Label',
  });
}

export function createButton(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'button',
    control: 'Classic/Button',
  });
}

export function createGallery(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'div',
    control: 'Gallery',
    variant: 'variableTemplateHeightGallery',
  });
}

export function createRectangle(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'div',
    control: 'Rectangle',
  });
}

export function createTextInput(componentName: string) {
  return new Component({
    componentName: componentName,
    componentView: 'input',
    control: 'Classic/TextInput',
  });
}
