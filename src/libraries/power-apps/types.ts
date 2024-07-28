export type IProperties<T> = {
  [K in keyof T]?: T[K];
};

export type IVariables<P> = {
  [K in keyof P]?: P[K];
};

export interface IYamlCode<T, P> {
  Control?: string;
  Variant?: string;
  Variables: IVariables<P>;
  Properties: IProperties<T>;
  Children?: IYaml<T, P>[];
}

export interface IYaml<T, P> {
  [componentName: string]: IYamlCode<T, P>;
}

export interface IComponent<T = unknown, P = unknown> {
  componentName: string;
  control?: string;
  variant?: string;
  variables: IVariables<P>;
  properties: IProperties<T>;
  children: IComponent[];
  setProperty<K extends keyof T>(key: K, value: string): void;
  setVariable<K extends keyof P>(key: K, value: P[K]): void;
  appendChild(child: IComponent): void;
  prependChild(child: IComponent): void;
  removeChild(child: IComponent): void;
  readonly theme: IVariables<P>;
  readonly yaml: IYaml<T, P>;
}

export interface IOptions<T, P> {
  componentName: string;
  control?: string;
  variant?: string;
  variables?: IVariables<P>;
  properties?: IProperties<T>;
  children?: IComponent[];
}
