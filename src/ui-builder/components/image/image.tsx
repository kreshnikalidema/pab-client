import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Component } from 'ui-builder/helpers/component';

interface Props {
  container: Component;
}

export const Image: React.FC<Props> = observer((props) => {
  const { container } = props;

  const src = container.metadata.src ?? 'https://placehold.co/128';

  return <img src={src} style={toJS(container.styles)} />;
});
