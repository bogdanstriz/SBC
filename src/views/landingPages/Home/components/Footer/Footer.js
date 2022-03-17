/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        Ukraine relief efforts
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        align={'center'}
      >
        How you can help
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={'center'}
      >
        Learn how you can contribute to relief efforts in Ukraine.
      </Typography>
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Button
          component={'a'}
          href={'https://www.altruisminternational.com/'}
          target='_blank'
          variant="contained"
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
