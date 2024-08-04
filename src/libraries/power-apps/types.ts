export type IProperties = {
  [key: string]: any;
};

export type IVariables = {
  [key: string]: any;
};

export type IStyles = {
  [key: string]: any;
};

export interface IYamlCode {
  Control?: string;
  Variant?: string;
  Properties: IProperties;
  Styles?: IStyles;
  Children?: IYaml[];
}

export interface IYaml {
  [componentName: string]: IYamlCode;
}

export interface IComponent {
  componentName: string;
  componentView: string;
  control?: string;
  variant?: string;
  properties: IProperties;
  styles: IStyles;
  variables: IVariables;
  children: IComponent[];
  setProperty(key: string, value: any): void;
  setStyle(key: string, value: any): void;
  setVariable(key: string, value: any): void;
  appendChild(child: IComponent): void;
  prependChild(child: IComponent): void;
  removeChild(child: IComponent): void;
  setComponentView(view: string): void;
  readonly theme: IVariables;
  readonly yaml: IYaml;
}

export interface IOptions {
  componentName: string;
  componentView: string;
  control?: string;
  variant?: string;
  properties?: IProperties;
  styles?: IStyles;
  variables?: IVariables;
  children?: IComponent[];
}
