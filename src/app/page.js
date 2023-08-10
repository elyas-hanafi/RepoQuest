import Navbar from '@/components/Navbar/Navbar';
import { Box, Button, Container } from '@mui/material';
import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          background: 'linear-gradient(to right bottom, #c31432, #240b36)',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <AnimatedText text="Navigating GitHub's Projects by Topics & Technologies" />
          <Link href={`/ProjectList`}>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                marginTop: '2rem',
                '&:hover': {
                  borderColor: 'white',
                  color: 'black',
                  backgroundColor: 'white',
                },
              }}
            >
              Lets Go
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
}
