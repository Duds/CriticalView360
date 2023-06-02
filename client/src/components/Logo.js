import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import logo from '../assets/logo.svg';

const Logo = ({ isLoggedIn }) => {
  return (
    <Link to={isLoggedIn ? '/dashboard' : '/'}>
      <Box component="img" src={logo} alt="CriticalView360 Logo" sx={{ width: 100, height: 100 }} />
    </Link>
  );
};

Logo.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Logo;
