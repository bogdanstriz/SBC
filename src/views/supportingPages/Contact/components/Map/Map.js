/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Map = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
        >
          Contact us
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'textSecondary'}>
            We'd love to talk to hear from you.
          </Typography>
        </Box>
      </Box>
      <Box marginY={4}>
        <Box
          component={'iframe'}
          borderRadius={2}
          minHeight={400}
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49000.324156489114!2d-83.17264551212433!3d39.862582867753275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81a7f37ebac4c383!2sSlavic%20Bethel%20Church!5e0!3m2!1sen!2sus!4v1646969082446!5m2!1sen!2sus"
          sx={{
            filter:
              themeMode === 'dark' ? 'grayscale(0.5) opacity(0.7)' : 'none',
          }}
        />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Call us:
          </Typography>
          <Typography variant={'subtitle1'}>Unavailable</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Email us:
          </Typography>
          <Typography variant={'subtitle1'}>Unavailable</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Address:
          </Typography>
          <Typography variant={'subtitle1'}>
          8715 Alkire Rd, Grove City, OH 43123
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Map.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Map;
