import { toJS } from 'mobx';
import { IComponent, IVariables, IYaml, IYamlCode } from './types';

export function toTheme(component: IComponent): IVariables {
  return component.children.reduce((acc, child) => {
    const childVariables = toTheme(child);
    return { ...acc, ...toJS(child.variables), ...childVariables };
  }, toJS(component.variables));
}

export function toYaml(component: IComponent): IYaml {
  const yamlCode: IYamlCode = {
    Control: component.control,
    Variant: component.variant,
    Properties: component.properties,
    Styles: component.styles,
    Children: component.children.map((child) => toYaml(child)),
  };

  if (yamlCode.Children?.length === 0) {
    delete yamlCode.Children;
  }

  return toJS({
    [component.componentName]: yamlCode,
  });
}
