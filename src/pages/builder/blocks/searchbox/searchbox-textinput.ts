import { styled } from 'helpers/styled';

export interface HeaderRightVariables {}

export interface HeaderRightProps {
  variables: HeaderRightVariables;
}

const SearchboxTextinput = styled.input<HeaderRightProps>(() => ({
  border: 'none',
  outline: 'none',
  flex: '1',
  padding: '5px',
  fontSize: '16px',
  color: '#203647',
  backgroundColor: 'transparent',
}));

SearchboxTextinput.defaultProps = {
  placeholder: 'Search...',
};

export { SearchboxTextinput };
