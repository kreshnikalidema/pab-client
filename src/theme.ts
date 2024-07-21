import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A6E22E', // Green
    },
    secondary: {
      main: '#66D9EF', // Blue
    },
    background: {
      default: '#2D2D2D', // Dark background
      paper: '#393939', // Slightly lighter background
    },
    text: {
      primary: '#F8F8F2', // Off-white text
      secondary: '#75715E', // Light brown text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 12, // Smaller fonts
    h1: {
      fontSize: '1.5rem',
    },
    h2: {
      fontSize: '1.25rem',
    },
    h3: {
      fontSize: '1.1rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.875rem',
    },
    h6: {
      fontSize: '0.75rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
  },
});
