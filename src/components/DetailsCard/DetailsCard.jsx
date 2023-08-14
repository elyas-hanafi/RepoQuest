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
import Image from 'next/image';
import { motion } from 'framer-motion';
import imageSrc from '@/img/testImg.jpg';
import { Preahvihear } from 'next/font/google';
import styled from '@emotion/styled';

const StyledGridXS = styled(Grid)(({ theme }) => ({
  /* Alternative styles for the Grid component in xs screen size */
}));
const fonts = Preahvihear({ subsets: ['latin'], weight: ['400'] });

export default function DetailsCard() {
  //   const isXsScreen = useMediaQuery((theme) => theme.b);

  return (
    <>
      {' '}
      <motion.div
        initial={{ translateY: '30px', opacity: '0%' }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileInView={{ translateY: '0px', opacity: '100%' }}
        style={{ width: '90%', position: 'relative' }}
      >
        <Card sx={{ display: 'flex', height: '35rem', marginTop: '3rem' }}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Image
                src={imageSrc}
                alt="Picture of the author"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CardContent sx={{ flex: 1, width: 'auto', height: '100%' }}>
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
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </>
  );
}
