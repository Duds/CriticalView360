// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0D47A1',
    },
    secondary: {
      main: '#66BB6A',
      contrastText: '#ffffff',
    },
    info: {
      main: '#3D6BB3',
    },
    warning: {
      main: '#ffa726',
      contrastText: '#0D47A1',
    },
    divider: 'rgba(13,71,161,0.5)',
    background: {
      default: '#eeeeee',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#263238',
      secondary: '#37474f',
      disabled: '#455a64',
      hint: '#607d8b',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  props: {
    MuiAppBar: {
      backgroundColor: '#ffffff',
      color: 'transparent',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 2,
  },
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: '#ffffff',
        color: '#89f38',
      },
    },
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
});

export default theme;
