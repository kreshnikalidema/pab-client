import { toJS } from 'mobx';
import { IComponent, IVariables, IYaml, IYamlCode } from './types';



export function toTheme<P>(component: IComponent<any, P>): IVariables<P> {
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
    Variables: component.variables,
    Children: component.children.map((child) => toYaml(child)),
  };

  return toJS({
    [component.componentName]: yamlCode,
  });
}