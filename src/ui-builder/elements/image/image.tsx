import * as React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { ViewProps } from '@/shared/store/component';

export const Image: React.FC<ViewProps> = observer((props) => {
  const { component } = props;

  const src = component.metadata.src ?? 'https://placehold.co/128';

  return <img src={src} style={toJS(component.styles)} />;
});
