'use client';
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Image from 'next/image';
import { motion } from 'framer-motion';
import imageSrc from '@/img/testImg.jpg';
import { Preahvihear } from 'next/font/google';
import { styled } from '@mui/material/styles';

const fonts = Preahvihear({ subsets: ['latin'], weight: ['400'] });

const StyledGrid = styled(Grid)(({ theme }) => ({
  /* Default styles for the Grid component */
  //   height: '100px', // Default height
}));

const StyledGridImgSMImg = styled(Grid)(({ theme }) => ({
  /* Alternative styles for the Grid component in sm screen size */
  /* Responsive styles for the Grid component */
  [theme.breakpoints.only('xs')]: {
    height: '30%', // Height for xs
  },
  [theme.breakpoints.up('xs')]: {
    height: '40%', // Height for sm
  },

  [theme.breakpoints.up('md')]: {
    height: '100%', // Height for lg
  },
}));
const StyledGridContentSM = styled(Grid)(({ theme }) => ({
  /* Alternative styles for the Grid component in sm screen size */
  [theme.breakpoints.only('xs')]: {
    height: '70%', // Height for xs
  },
  [theme.breakpoints.up('xs')]: {
    height: '60%', // Height for sm
  },
  [theme.breakpoints.up('md')]: {
    height: '100%', // Height for lg
  },
}));

export default function DetailsCard() {
  return (
    <>
      {' '}
      <motion.div
        initial={{ translateY: '30px', opacity: '0%' }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileInView={{ translateY: '0px', opacity: '100%' }}
        style={{
          width: '90%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            height: '80%',
            marginTop: '3rem',
            position: 'relative',
          }}
        >
          <Grid container>
            <StyledGridImgSMImg item md={6} xs={12}>
              <Image
                src={imageSrc}
                alt="Picture of the author"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </StyledGridImgSMImg>

            <StyledGridContentSM item md={6} xs={12}>
              <CardContent sx={{ flex: 1, height: '100%' }}>
                <Typography
                  sx={{ fontSize: '1rem', marginBottom: '1.1rem' }}
                  variant="h5"
                  // component="h5"
                  fontFamily={fonts.style}
                >
                  Deatils
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  sx={{
                    fontSize: '1rem',
                    paddingTop: '20px',
                  }}
                >
                  Hello
                </Typography>
                <Button
                  sx={{
                    display: 'block',
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    color: 'white',
                    backgroundColor: 'black',
                    '&:hover': {
                      border: '1px solid black',
                      color: 'black',
                    },
                  }}
                >
                  See More
                </Button>
              </CardContent>
            </StyledGridContentSM>
          </Grid>
        </Card>
      </motion.div>
    </>
  );
}
