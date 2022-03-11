import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Map, Faq } from './components';
import Container from 'common/Container';

const Contact = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Map themeMode={themeMode} />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container maxWidth={800}>
          <Faq />
        </Container>
      </Box>
    </Box>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
