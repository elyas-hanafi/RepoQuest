import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Box, Container, Grid } from '@mui/material';
import CardImageSideBySide from '../../components/Card/Card';
export default function ProjectList() {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '300vh',
          background: 'linear-gradient(to right bottom, #c31432, #240b36)',
        }}
      >
        <SideBar />
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ marginTop: '50px' }}>
            <Grid item md={6} xs={12}>
              <CardImageSideBySide
                imageSrc="url_to_image1.jpg"
                title="Card Title 1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CardImageSideBySide
                imageSrc="url_to_image2.jpg"
                title="Card Title 2"
                content="Sed ac quam ac justo placerat efficitur."
              />
            </Grid>
            {/* Add more Grid items with SideBySideCard components as needed */}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
