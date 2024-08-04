import { styled } from 'helpers/styled';

export interface ProfileContainerVariables {}

export interface ProfileContainerProps {
  variables: ProfileContainerVariables;
}

export const ProfileContainer = styled.div<ProfileContainerProps>(() => ({
  display: 'flex',
  alignItems: 'center',
}));
