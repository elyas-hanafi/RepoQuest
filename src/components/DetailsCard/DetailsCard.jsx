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
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useTheme,
} from '@mui/material/styles';

import Image from 'next/image';
import { motion } from 'framer-motion';
import imageSrc from '@/img/testImg.jpg';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

import { Cabin } from 'next/font/google';
const fontsCabin = Cabin({ subsets: ['latin'], weight: ['400'] });

import { Teko } from 'next/font/google';
const fonts = Teko({ subsets: ['latin'], weight: ['400'] });

const StyledGrid = styled(Grid)(({ theme }) => ({
  /* Default styles for the Grid component */
  //   height: '100px', // Default height
}));

const StyledGridImgSM = styled(Grid)(({ theme }) => ({
  /* Alternative styles for the Grid component in sm screen size */
  /* Responsive styles for the Grid component */
  [theme.breakpoints.only('xs')]: {
    height: '30%', // Height for xs
  },
  [theme.breakpoints.up('xs')]: {
    height: '30%', // Height for sm
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
    height: '70%', // Height for sm
  },
  [theme.breakpoints.up('md')]: {
    height: '100%', // Height for lg
  },
}));

const frontEndTechnologies = [
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Vue.js' },
  { name: 'Angular' },
  { name: 'Next.js' },
  { name: 'Framer Motion' },
  { name: 'Material-UI (MUI)' },
  { name: 'Sass' },
];

// Auto Responsive Fonts Size
let theme = createTheme();
theme = responsiveFontSizes(theme);
// Customize Fonts by BreackPoint

// theme.typography.h5 = {
//   // '@media (min-width:600px)': {
//   //   fontSize: '1.5rem',
//   // },
//   [theme.breakpoints.up('xs')]: {
//     paddingTop: '30px',
//   },
//   [theme.breakpoints.up('md')]: {
//     paddingTop: '60px',
//   },
// };
export default function DetailsCard() {
  return (
    <>
      {' '}
      <ThemeProvider theme={theme}>
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
              <StyledGridImgSM item md={6} xs={12}>
                <Image
                  src={imageSrc}
                  alt="Picture of the author"
                  style={{ width: '100%', objectFit: 'cover', height: '100%' }}
                />
              </StyledGridImgSM>

              <StyledGridContentSM item md={6} xs={12}>
                <CardContent sx={{ flex: 1, height: '100%' }}>
                  <Typography
                    sx={{ marginBottom: '1.1rem' }}
                    variant="h4"
                    // fontFamily={fonts.style}
                    fontFamily={fontsCabin.style}
                  >
                    Project Name Project Name Project Name
                  </Typography>
                  <Typography
                    variant="p"
                    fontFamily={fontsCabin.style}
                    sx={{
                      paddingTop: '3%',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam ducimus assumenda est provident facilis iste
                    repellat vero aspernatur dicta libero.
                  </Typography>
                  <div>
                    <Typography
                      variant="h5"
                      fontFamily={fontsCabin.style}
                      sx={{
                        paddingTop: '6%',
                      }}
                    >
                      What technologies ?
                    </Typography>
                    <div
                      style={{
                        paddingTop: '1.2rem',
                      }}
                    >
                      {frontEndTechnologies.map((tech) => (
                        <>
                          <Typography
                            fontFamily={fontsCabin.style}
                            variant="span"
                          >
                            {tech.name}
                          </Typography>{' '}
                          ,
                        </>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/home`}
                    style={{
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
                      textDecoration: 'none',
                      padding: '10px 20px',
                      borderRadius: '5px',
                    }}
                  >
                    Github Page
                  </Link>
                </CardContent>
              </StyledGridContentSM>
            </Grid>
          </Card>
        </motion.div>
      </ThemeProvider>
    </>
  );
}
