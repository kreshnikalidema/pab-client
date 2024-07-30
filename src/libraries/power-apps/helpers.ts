import { toJS } from 'mobx';
import { IComponent, IVariables, IYaml, IYamlCode } from './types';

export function toTheme<T, P>(component: IComponent<T, P>): IVariables<P> {
  return component.children.reduce((acc, child) => {
    const childVariables = toTheme(child);
    return { ...acc, ...toJS(child.variables), ...childVariables };
  }, toJS(component.variables));
}

export function toYaml<T, P>(component: IComponent<T, P>): IYaml<T, P> {
  const yamlCode: IYamlCode<T, P> = {
    Control: component.control,
    Variant: component.variant,
    Properties: component.properties,
    Children: component.children.map((child) => toYaml(child)),
  };

  if (yamlCode.Children?.length === 0) {
    delete yamlCode.Children;
  }

  return toJS({
    [component.componentName]: yamlCode,
  });
}

export function Noop() {
  return null;
}
