import { styled } from 'helpers/styled';

export interface LogoImageVariables {}

export interface LogoImageProps {
  variables: LogoImageVariables;
}

const LogoImage = styled.img<LogoImageProps>(() => ({
  height: '30px',
  width: 'auto',
  alignSelf: 'center',
}));

LogoImage.defaultProps = {
  src: 'https://via.placeholder.com/300x100',
};

export { LogoImage };
