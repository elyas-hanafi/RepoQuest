'use client';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Preahvihear } from 'next/font/google';

const fonts = Preahvihear({ subsets: ['latin'], weight: ['400'] });
const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.6,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export default function AnimatedText({ text }) {
  return (
    <>
      <Typography
        variant="h2"
        component={motion.h2}
        fontFamily={fonts.style}
        sx={{
          fontWeight: 900,
          fontSize: '1.5rem',
          letterSpacing: '.1rem',
          lineHeight: '2.5rem',
          color: 'white',
        }}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <Typography
            variant="span"
            component={motion.span}
            key={word + '-' + index}
            variants={singleWord}
            sx={{ display: 'inline-block' }}
          >
            {word}&nbsp;
          </Typography>
        ))}
      </Typography>
    </>
  );
}
