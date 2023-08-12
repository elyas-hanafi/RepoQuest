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
import imageSrc from '@/img/seconde-card-6.jpg';
import Image from 'next/image';
export default function CardImageSideBySide({ title, content }) {
  return (
    <motion.div
      initial={{ translateY: '30px', opacity: '0%' }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ translateY: '0px', opacity: '100%' }}
    >
      <Card sx={{ display: 'flex', height: '12rem' }}>
        <Image
          src={imageSrc}
          alt="Picture of the author"
          style={{ width: '45%', height: 'auto', objectFit: 'cover' }}
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
