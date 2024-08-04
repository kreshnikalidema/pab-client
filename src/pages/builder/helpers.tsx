import { Component } from 'libraries/power-apps'; // Adjust the import path as needed

interface ComponentParams {
  componentView: string;
  componentName: string;
  control: string;
  variant: string;
  properties: Record<string, any>;
  styles: Record<string, any>;
  variables: Record<string, any>;
  children?: ComponentParams[];
}

export function createComponent(params: ComponentParams): Component {
  return new Component({
    componentName: params.componentName,
    componentView: params.componentView,
    control: params.control,
    variant: params.variant,
    properties: params.properties,
    variables: params.variables,
    styles: params.styles,
    children: params.children?.map(createComponent),
  });
}
