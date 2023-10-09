import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Pokemon, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    grey: {
      50: '#FFFFFF',
      100: '#F7F8FA',
      200: '#E9ECEF',
      300: '#CED4DA',
      400: '#9D9FA7',
      500: '#ADB5BD',
      600: '#363C4F',
      800: '#202430',
      900: '#1A1E2A',
    },
    background: {
      default: '#fff',
    },
    primary: {
      main: '#1A1E2A',
    },
    secondary: {
      main: '#FABE25',
      dark: '#BFBFBF',
      light: '#F5F5F5',
    },
    error: {
      main: '#FF3B30',
      light: 'rgba(255,27,0,0.1)',
    },
    warning: {
      main: '#ffdb00',
      light: 'rgba(255,219,0,0.1)',
    },
    success: {
      main: '#32DA5C',
      light: 'rgba(50,218,92,0.1)',
    },
    info: {
      main: '#007AFF',
    },
  },
});
