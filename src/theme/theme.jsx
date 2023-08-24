'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
export const theme = createTheme({
  palette: {
    status: {
      danger: orange[500],
    },
  },
});

export default function MuiThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
