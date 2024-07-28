export type IProperties<T> = {
  [K in keyof T]?: T[K];
};

export interface IYamlCode<T> {
  Control?: string;
  Variant?: string;
  Properties: IProperties<T>;
  Children?: IYaml<T>[];
}

export interface IYaml<T> {
  [componentName: string]: IYamlCode<T>;
}

export interface IComponent<T = unknown> {
  componentName: string;
  control?: string;
  variant?: string;
  properties: IProperties<T>;
  children: IComponent[];
  setProperty<K extends keyof T>(key: K, value: string): void;
  appendChild(child: IComponent): void;
  prependChild(child: IComponent): void;
  removeChild(child: IComponent): void;
  readonly yaml: IYaml<T>;
}

export interface IOptions<T> {
  componentName: string;
  control?: string;
  variant?: string;
  properties?: IProperties<T>;
  children?: IComponent[];
}
