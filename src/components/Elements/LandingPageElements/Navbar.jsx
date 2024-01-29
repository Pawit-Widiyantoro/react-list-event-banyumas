import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

const LandingNav = () => {
    const buttonStyles= {
        color:'#fff',
        marginRight:'20px',
        marginLeft:'20px', 
        fontFamily: 'Open Sans-Regular, Helvetica', 
    }
    return (
        <AppBar position="static" elevation={0} style={{ backgroundColor:'#284b63', paddingRight:'180px', fontFamily:'Open Sans-Regular, Helvetica' }}>
            <Toolbar style={{ display:'flex', justifyContent:'flex-end'}}>
                <div>
                    {/* Your navigation links */}
                    <Button style={buttonStyles}>Home</Button>
                    <Button style={buttonStyles}>About</Button>
                    <Button style={buttonStyles}>Gallery</Button>
                    <Button style={buttonStyles}>Event</Button>
                    <Button variant="outlined" style={{ color:'#fff', backgroundColor:'#284b63', borderRadius:'30px', borderColor:'#fff', width:'120px' }}>Login</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default LandingNav;