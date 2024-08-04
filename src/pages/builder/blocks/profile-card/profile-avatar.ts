import { styled } from 'helpers/styled';

export interface ProfileAvatarVariables {}

export interface ProfileAvatarProps {
  variables: ProfileAvatarVariables;
}

export const ProfileAvatar = styled.div<ProfileAvatarProps>(() => ({
  width: '35px',
  height: '35px',
  border: '2px solid black',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
