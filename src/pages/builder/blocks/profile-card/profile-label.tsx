import { styled } from 'helpers/styled';

export interface ProfileLabelVariables {}

export interface ProfileLabelProps {
  variables: ProfileLabelVariables;
}

const ProfileLabel2 = styled.p<ProfileLabelProps>(() => ({
  fontSize: '12px',
  color: '#333',
  marginLeft: '10px',
}));

const ProfileLabel = () => {
  // @ts-ignore
  return <ProfileLabel2>Kreshnik Alidema</ProfileLabel2>;
};

export { ProfileLabel };
