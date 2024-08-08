export type Properties = {
  [key: string]: any;
};

export type Variables = {
  [key: string]: any;
};

export type Styles = {
  [key: string]: any;
};

export type Metadata = {
  [key: string]: any;
};

export interface YamlCode {
  Control?: string;
  Variant?: string;
  Properties: Properties;
  Children?: Yaml[];
}

export interface Yaml {
  [componentName: string]: YamlCode;
}

export interface IComponent {
  componentName: string;
  componentView?: string;
  control?: string;
  variant?: string;
  variables: Variables;
  properties: Properties;
  styles: Styles;
  metadata: Metadata;
  children: IComponent[];
  setProperty(key: string, value: any): void;
  setStyle(key: string, value: any): void;
  setVariable(key: string, value: any): void;
  appendChild(child: IComponent): void;
  prependChild(child: IComponent): void;
  removeChild(child: IComponent): void;
  setComponentView(view: string): void;
  setMetadata(key: string, value: any): void;
  readonly theme: Variables;
  readonly yaml: Yaml;
}

export interface Options {
  componentName: string;
  componentView?: string;
  control?: string;
  variant?: string;
  variables?: Variables;
  properties?: Properties;
  styles?: Styles;
  metadata?: Metadata;
  children?: IComponent[];
}
