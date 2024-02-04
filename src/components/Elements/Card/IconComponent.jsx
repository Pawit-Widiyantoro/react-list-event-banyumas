import React from "react";
import { Typography } from "@mui/material";

const IconFooter = ({ icon, text }) => {
  const iconStyles = {
    width: '15px',
    height: '15px',
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={icon} alt="" style={iconStyles} />
      <Typography variant="body2" color="textSecondary" ml={1}>
        {text}
      </Typography>
    </div>
  );
};

export default IconFooter;
