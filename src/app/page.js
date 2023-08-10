import Navbar from '@/components/Navbar/Navbar';
import { Box, Container } from '@mui/material';
import React from 'react';
import AnimatText from '../components/Navbar/AnimatText/AnimatText';

export default function Home() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          width: '100%',
          height: '100vh',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <AnimatText text="Navigating GitHub's Projects by Topics & Technologies" />
        </Container>
      </Box>
    </>
  );
}
