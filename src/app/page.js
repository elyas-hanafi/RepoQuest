import Navbar from '@/components/Navbar/Navbar';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import GithubLogo from '../components/GithubLogo/GithubLogo';
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
          position: 'relative',
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
          <GithubLogo />
          <AnimatedText text="Navigating GitHub's Projects by Topics & Technologies" />
          <Link href={`/ProjectList`}>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                marginTop: '2rem',
                textDecoration: 'none',
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
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              bottom: '10px',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              fontSize: '0.8rem',
              color: 'white',
            }}
          >
            Discover, Learn, Collaborate.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
