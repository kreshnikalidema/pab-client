import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from '@/shared/store/component';

interface Props {
  container: Component;
}

export const TextInput: React.FC<Props> = observer((props) => {
  const { container } = props;

  const placeholder = container.metadata.placeholder ?? '';

  return <input style={toJS(container.styles)} placeholder={placeholder} />;
});
