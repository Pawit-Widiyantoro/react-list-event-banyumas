import React from "react";
import { IconButton } from "@mui/material";

const SocialIconButton = ({ icon }) => {
    // inline styles
    const iconButtonStyles = {
      backgroundColor: 'white',
      marginRight: '5px',
      padding: '5px',
    };
    const iconStyles = {
      color: 'black',
    };
  
    return (
      <IconButton style={iconButtonStyles}>
        <i className={`fab ${icon}`} style={iconStyles}></i>
      </IconButton>
    );
};

export default SocialIconButton;  