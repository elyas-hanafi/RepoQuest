import { Box } from '@mui/material';
import React from 'react';
import DetailsCard from '@/components/DetailsCard/DetailsCard';
export default function page({ params: { details } }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(to right bottom, #c31432, #240b36)',
        }}
      >
        Page Number : {details}
        <DetailsCard />
      </Box>
    </>
  );
}
