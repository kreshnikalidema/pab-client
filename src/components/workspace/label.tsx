import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from '@app/helpers/component';

interface Props {
  container: Component;
}

export const Label: React.FC<Props> = observer((props) => {
  const { container } = props;

  const label = container.metadata.label ?? 'Label';

  return <span style={toJS(container.styles)}>{label}</span>;
});
