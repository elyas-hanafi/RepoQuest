import React from 'react';
import SideBar from '@/components/SideBar/SideBar';
import SkeletonSearchPage from '@/components/Skeleton/SkeletonSearchPage';
import { Box, Card, Container, Grid } from '@mui/material';
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
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
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

          {/* Skeleton */}
          <SkeletonSearchPage />
        </Container>
      </Box>
    </div>
  );
}
