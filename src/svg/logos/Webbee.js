import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import LightLogo from './logo_light_lp.png';
import DarkLogo from './logo_dark_lp.png';

const Webbee = ({ width = 750, height = 40 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimaryDark = theme.palette.primary.main;
  return (
    <img alt={'logo'} src = {LightLogo} width={80} height={35}/>
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
