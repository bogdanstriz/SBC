import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Church from '../logos/church_image.png';

const Rocket = ({ width = 329, height = 273 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  return (
    <img src={Church} width={width} height={height}/>
  );
};

Rocket.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Rocket;
