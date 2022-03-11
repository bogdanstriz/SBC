import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Serve from './serve.png';
import Worship from './worship.png';
import Proclaim from './proclaim.png';

const Highlights = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Serve/Donate',
            subtitle:
              'To be ready to serve we must be trained and equipped.  This is why bible study, prayer and meeting with other believers for support, encouragement and teaching is vital.',
            icon: (
              <img src={Serve} height={45} width={40}/>
            ),
          },
          {
            title: 'Worship/Donate',
            subtitle:
              'Getting to know God personally through prayer and bible study helps us to see God more clearly and therefore encourages our worship.',
            icon: (
              <img src={Worship} height={45} width={45}/>
            ),
          },
          {
            title: 'Proclaim/Donate',
            subtitle:
              '--\'We proclaim Him, admonishing every man and teaching every man with all wisdom.\' ----Colossians 1:28',
            icon: (
              <img src={Proclaim} height={45} width={45}/>
            ),
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={'100%'} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;
