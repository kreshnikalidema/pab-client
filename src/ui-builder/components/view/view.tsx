import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from '../../helpers/component';

interface Props {
  container: Component;
  children: React.ReactNode;
}

export const View: React.FC<Props> = observer((props) => {
  const { container, children } = props;

  return <div style={toJS(container.styles)}>{children}</div>;
});
