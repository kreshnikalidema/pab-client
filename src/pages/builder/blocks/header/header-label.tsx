import { styled } from 'helpers/styled';

export interface HeaderLabelVariables {}

export interface HeaderLabelProps {
  variables: HeaderLabelVariables;
}

const HeaderLabel2 = styled.p<HeaderLabelProps>(() => ({
  fontSize: '12px',
  color: '#333',
  marginLeft: '10px',
}));

const HeaderLabel = () => {
  // @ts-ignore
  return <HeaderLabel2>Header Label</HeaderLabel2>;
};

export { HeaderLabel };
