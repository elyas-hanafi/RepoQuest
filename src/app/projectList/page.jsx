import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Box, Card, Container, Grid, Skeleton } from '@mui/material';
import CardImageSideBySide from '../../components/Card/Card';

export default function ProjectList() {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(to right bottom, #c31432, #240b36)',
        }}
      >
        <SideBar />
        <Container maxWidth="lg">
          {/* <Grid container spacing={2} sx={{ padding: '80px 0px' }}>
            {/* <Grid item md={6} xs={12}>
              <CardImageSideBySide
                imageSrc="url_to_image1.jpg"
                title="Card Title 1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid> */}
          {/* Add more Grid items with SideBySideCard components as needed */}
          {/* </Grid> */}
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              height: '15rem',
              width: '100%',
              paddingTop: '80px',
              marginTop: '20px',
            }}
          >
            <Grid item md={6} xs={12} sx={{ width: '50%', height: '100%' }}>
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ width: '50%', height: '100%' }}>
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ width: '50%', height: '100%' }}>
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ width: '50%', height: '100%' }}>
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ width: '50%', height: '100%' }}>
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ width: '50%', height: '100%' }}>
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                sx={{ backgroundColor: '#ffffff55', borderRadius: '10px' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
