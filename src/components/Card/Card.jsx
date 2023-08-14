'use client';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import imageSrc from '@/img/testImg.jpg';
import Image from 'next/image';
import { Preahvihear } from 'next/font/google';
import Link from 'next/link';

const fonts = Preahvihear({ subsets: ['latin'], weight: ['400'] });
export default function CardImageSideBySide({ title, content }) {
  return (
    <motion.div
      initial={{ translateY: '30px', opacity: '0%' }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileInView={{ translateY: '0px', opacity: '100%' }}
    >
      <Card sx={{ display: 'flex', height: '12rem' }}>
        <Image
          src={imageSrc}
          alt="Picture of the author"
          style={{ width: '45%', height: 'auto', objectFit: 'cover' }}
        />

        <CardContent sx={{ flex: 1 }}>
          <Typography
            sx={{ fontSize: '1rem', marginBottom: '1.1rem' }}
            variant="h5"
            // component="h5"
            fontFamily={fonts.style}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            color="text.secondary"
            sx={{
              fontSize: '1rem',
              paddingTop: '20px',
            }}
          >
            {content}
          </Typography>

          <Link
            href={'projectList/details/1'}
            style={{
              display: 'block',
              position: 'absolute',
              bottom: 10,
              right: 10,
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              backgroundColor: 'black',
              '&:hover': {
                border: '1px solid black',
                color: 'black',
              },
            }}
          >
            See More
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
