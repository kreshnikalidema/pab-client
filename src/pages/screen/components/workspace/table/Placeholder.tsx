import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PlaceholderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  border: '2px dashed #ccc',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

const CenteredButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const Placeholder: React.FC = () => {
  return (
    <PlaceholderContainer>
      <Typography variant="h6">
        Click here to add the fields of the table
      </Typography>
      <CenteredButton variant="contained" color="primary">
        Add Fields
      </CenteredButton>
    </PlaceholderContainer>
  );
};
