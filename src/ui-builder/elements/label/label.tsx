import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from '@/shared/store/component';

interface Props {
  component: Component;
}

export const Label: React.FC<Props> = observer((props) => {
  const { component } = props;

  const label = component.metadata.label ?? 'Label';

  return <span style={toJS(component.styles)}>{label}</span>;
});
