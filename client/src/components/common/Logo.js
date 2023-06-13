import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import logo from "../../assets/1F9D0.svg";

const Logo = ({ isLoggedIn }) => {
  return (
    <Link to={isLoggedIn ? "/dashboard" : "/"}>
      <Box
        component="img"
        src={logo}
        alt="CriticalView360 Logo"
        sx={{ width: 50, height: 50 }}
      />
    </Link>
  );
};

Logo.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Logo;
