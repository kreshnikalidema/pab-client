import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from '@app/helpers/component';

interface Props {
  container: Component;
  children: any;
  innerRef: any;
}

interface DroppedItem {
  fn: () => Component;
}

export const TextInput: React.FC<Props> = observer((props) => {
  const { container, children, innerRef } = props;

  const placeholder = container.metadata.placeholder ?? ''

  return (
    <input style={toJS(container.styles)} placeholder={placeholder} />
  );
});
