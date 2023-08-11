'use client';
import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

export default function CardImageSideBySide({ imageSrc, title, content }) {
  return (
    <motion.div
      initial={{ translateY: '30px', opacity: '0%' }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ translateY: '0px', opacity: '100%' }}
    >
      <Card sx={{ display: 'flex', height: '15rem' }}>
        <CardMedia
          component="img"
          sx={{ width: 150, objectFit: 'cover' }}
          alt="Card Image"
          image={imageSrc}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
