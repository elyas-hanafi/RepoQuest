import { Box } from '@mui/material';
import React from 'react';
import DetailsCard from '@/components/DetailsCard/DetailsCard';
export default function page({ params }) {
  console.log(params);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
          background: 'linear-gradient(to right bottom, #c31432, #240b36)',
        }}
      >
        Page Number : {params.slug}
        <DetailsCard />
      </Box>
    </>
  );
}

export async function generateStaticParams() {
  const posts = ['1', '2', '3'];

  return posts.map((post) => ({
    slug: post,
  }));
}
