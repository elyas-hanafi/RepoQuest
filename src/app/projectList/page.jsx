import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Box } from '@mui/material';
export default function ProjectList() {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '300vh',
          background: 'linear-gradient(to right bottom, #c31432, #240b36)',
          // position: 'relative',
        }}
      >
        <SideBar />
      </Box>
    </div>
  );
}
