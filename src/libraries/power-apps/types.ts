export type IProperties<T> = {
  [K in keyof T]?: T[K];
};

export type IVariables<P> = {
  [K in keyof P]?: P[K];
};

export interface IYamlCode<T, P> {
  Control?: string;
  Variant?: string;
  Properties: IProperties<T>;
  Children?: IYaml<T, P>[];
}

export interface IYaml<T, P> {
  [componentName: string]: IYamlCode<T, P>;
}

export interface IComponent<T = unknown, P = unknown> {
  componentName: string;
  componentView?: React.FC<any>;
  control?: string;
  variant?: string;
  variables: IVariables<P>;
  properties: IProperties<T>;
  children: IComponent<any, any>[];
  setProperty<K extends keyof T>(key: K, value: string): void;
  setVariable<K extends keyof P>(key: K, value: P[K]): void;
  appendChild<U, V>(child: IComponent<U, V>): void;
  prependChild<U, V>(child: IComponent<U, V>): void;
  removeChild<U, V>(child: IComponent<U, V>): void;
  setComponentView(view: React.FC<any>): void;
  readonly theme: IVariables<P>;
  readonly yaml: IYaml<T, P>;
  readonly View: React.FC<any>;
}

export interface IOptions<T, P> {
  componentName: string;
  componentView?: React.FC<any>;
  control?: string;
  variant?: string;
  variables?: IVariables<P>;
  properties?: IProperties<T>;
  children?: IComponent<any, any>[];
}
