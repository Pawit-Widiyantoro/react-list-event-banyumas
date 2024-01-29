import React from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const IconButtons = () => {
    const CommonIcons = {
      width: 'auto',
      height: 'auto', 
      marginRight: '40px'
    }

    const ImageIcons = { 
      width: '100%', 
      height: '100%' 
    }

    return (
        <>
          <IconButton color="inherit" sx={CommonIcons}>
            <img src="./assets/notification.svg" alt="" style={ImageIcons} />
          </IconButton>
          <IconButton color="inherit" sx={CommonIcons}>
            <Link to="/cart.php">
              <img src="./assets/shopping-cart.svg" alt="" style={ImageIcons} />
            </Link>
          </IconButton>
          <IconButton color="inherit">
            <Link to="/logout_user.php">
              <img src="./assets/account-pin.svg" alt="" width="50" height="50" />
            </Link>
          </IconButton>
        </>
    );
}

export default IconButtons;