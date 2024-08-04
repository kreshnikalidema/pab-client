import { styled } from 'helpers/styled';

export interface ProfileImageVariables {}

export interface ProfileImageProps {
  variables: ProfileImageVariables;
}

const ProfileImage = styled.img<ProfileImageProps>(() => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
}));

ProfileImage.defaultProps = {
  src: 'https://via.placeholder.com/300x300',
};

export { ProfileImage };
