import React from 'react';
import { Grid, Skeleton } from '@mui/material';
export default function SkeletonSearchPage() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          paddingTop: '80px',
          marginTop: '20px',
          zIndex: 0,
        }}
      >
        <Grid item md={6} xs={12} sx={{ width: '50%', height: '14rem' }}>
          <Skeleton
            variant="rectangular"
            width={'100%'}
            height={'100%'}
            sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item md={6} xs={12} sx={{ width: '50%', height: '14rem' }}>
          <Skeleton
            variant="rectangular"
            width={'100%'}
            height={'100%'}
            sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
          />
        </Grid>

        {/* <Grid item md={6} xs={12} sx={{ width: '50%', height: '14rem' }}>
          <Skeleton
            variant="rectangular"
            width={'100%'}
            height={'100%'}
            sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item md={6} xs={12} sx={{ width: '50%', height: '14rem' }}>
          <Skeleton
            variant="rectangular"
            width={'100%'}
            height={'100%'}
            sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
          />
        </Grid> */}
      </Grid>
    </>
  );
}
