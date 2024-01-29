import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavLogo = () => {
    const LogoStyles = {
      fontWeight: '800',
      fontSize: '24px',
      fontFamily: "Jost-ExtraBold, Helvetica",
    };
    
    const LinkStyles = {
      display: 'flex', 
      alignItems: 'center', 
      textDecoration: 'none',
      fontFamily: "Open Sans-Regular, Helvetica",
      fontWeight: '400',
      fontSize: '15px'
    };

    const LogoWrapper = {
      marginLeft: '5px', 
      color: '#284b63'
    }
    return (
      <Link to="/" style={LinkStyles}>
        <img src="./assets/icon-navbar.png" alt="" style={{ verticalAlign: 'middle' }} />
        <div style={LogoWrapper}>
          <Typography variant="h6" style={LogoStyles}>List Event</Typography>
          <Typography variant="h6" style={{ ...LogoStyles, marginTop: '-5px'}}>Banyumas</Typography>
        </div>
      </Link>
    );
}

export default NavLogo;