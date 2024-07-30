import { styled } from 'helpers/styled';

export interface HeaderRightVariables {}

export interface HeaderRightProps {
  variables: HeaderRightVariables;
}

const SearchboxImage = styled.img<HeaderRightProps>(() => ({
  width: '20px',
  height: '20px',
  marginRight: '10px',
}));

SearchboxImage.defaultProps = {
  src: 'https://via.placeholder.com/300x300',
};

export { SearchboxImage };
