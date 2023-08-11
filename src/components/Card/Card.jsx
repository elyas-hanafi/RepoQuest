import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

export default function CardImageSideBySide({ imageSrc, title, content }) {
  return (
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
  );
}
