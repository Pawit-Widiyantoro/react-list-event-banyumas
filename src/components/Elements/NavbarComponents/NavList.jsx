import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavList = () => {
    return (
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly',  }}>
        {/* Your navigation links */}
        <Button component={Link} to="/home_page_user.php" style={{ color: '#284b63' }}>Home</Button>
        <Button component={Link} to="/category" style={{ color: '#284b63' }}>Category</Button>
        <Button component={Link} to="/gallery_event.html" style={{ color: '#284b63' }}>Gallery Event</Button>
      </div>
    );
}

export default NavList;