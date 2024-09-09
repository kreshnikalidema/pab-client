import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const HeaderLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  cursor: 'pointer',
  marginRight: theme.spacing(2),
  textDecoration: 'none',
}));
