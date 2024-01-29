// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // Your custom primary color
    },
    secondary: {
      main: '#2196f3', // Your custom secondary color
    },
    error: {
      main: '#f44336', // Your custom error color
    },
    // Add more custom colors as needed
  },
});

export default theme;
