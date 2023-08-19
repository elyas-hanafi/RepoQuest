import React from 'react';
import { Box, Card, Container, Typography } from '@mui/material';

import { Cabin } from 'next/font/google';
const fontsCabin = Cabin({ subsets: ['latin'], weight: ['400'] });

import { Teko } from 'next/font/google';
const fonts = Teko({ subsets: ['latin'], weight: ['400'] });
export default function AboutUs() {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(to right bottom, #c31432, #240b36)',
        }}
      >
        <Container maxWidth="md">
          {' '}
          <Box sx={{ paddingTop: '10%' }}>
            <Typography
              variant="h3"
              fontFamily={fontsCabin.style}
              sx={{
                color: '#ffffff',
                marginBottom: '3%',
              }}
            >
              About Us:
            </Typography>
            <Typography
              variant="p"
              fontFamily={fontsCabin.style}
              sx={{
                color: '#ffffff',
              }}
            >
              Welcome to our innovative platform designed to simplify your
              journey through the expansive realm of GitHub projects! We are a
              team of passionate developers who understand the challenges of
              finding the right projects amidst the sea of repositories. Our
              mission is to empower developers like you by providing a
              streamlined experience to discover projects that align with your
              preferred technologies.
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: '#ffffff',
                marginY: '3%',
              }}
              fontFamily={fontsCabin.style}
            >
              Features:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Our website harnesses cutting-edge technologies to deliver an
              intuitive and efficient user experience. We&apos;ve employed
              Next.js for seamless page transitions, Material-UI (MUI) for sleek
              and responsive design elements, Framer Motion for engaging
              animations that enhance interactivity, Redux Toolkit for state
              management, and a robust CI/CD pipeline with GitHub Actions to
              ensure smooth deployment. Additionally, Firebase powers our
              backend, ensuring fast and reliable data retrieval.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Technological Filtering:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Easily narrow down GitHub projects based on your preferred
              technologies. Our advanced filtering system ensures you find
              projects that align with your interests and skillset.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              User-Friendly Interface:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Navigate through projects effortlessly with our user-friendly
              interface, designed with MUI components for a sleek and consistent
              look.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Smooth Animations:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Experience smooth and captivating animations powered by Framer
              Motion, enhancing your interaction with project listings.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              State Management:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Redux Toolkit is at the core of our state management, providing a
              seamless browsing experience as you explore various projects.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Reliable Deployment:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Our continuous integration and continuous deployment (CI/CD)
              pipeline, powered by GitHub Actions, guarantees that you always
              have access to the latest features and improvements.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Reliable Deployment:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Our commitment to excellence doesn&apos;t stop here. We&apos;re
              dedicated to continuously improving your experience. In the
              future, we have exciting plans to roll out even more features and
              enhancements. Stay tuned for:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Advanced Search:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              A refined search functionality that allows you to explore projects
              with even greater precision.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              User Profiles:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Personalized user profiles, enabling you to track your favorite
              projects, showcase your contributions, and connect with fellow
              developers.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Communication:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              We value your feedback and are excited to engage with you. Connect
              with us through various channels:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Communication:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
              }}
              fontFamily={fontsCabin.style}
            >
              Reach out to me at elyashanafi79@gmail.com for inquiries,
              feedback, or collaboration opportunities.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                marginTop: '4%',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Social Media:
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
                display: 'block',
                marginBottom: '2%',
              }}
              fontFamily={fontsCabin.style}
            >
              Follow me on Twitter (@elyas_hanafi79) for the latest updates,
              feature announcements, and development insights.
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: '#ffffff',
                display: 'block',
                paddingBottom: '2rem',
              }}
              fontFamily={fontsCabin.style}
            >
              Thank you for joining us on this exciting journey to simplify
              GitHub project discovery. We look forward to enhancing your
              experience and making your developer journey even more enjoyable
              and productive.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
