'use client';
import { createTheme } from '@mui/material';
export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
        },
      },
    },
  },
});
