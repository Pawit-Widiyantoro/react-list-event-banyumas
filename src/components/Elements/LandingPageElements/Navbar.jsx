import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LandingNav = () => {
    const menuStyles= {
        color:'#fff',
        marginRight:'20px',
        marginLeft:'20px', 
        fontFamily: 'Open Sans-Regular, Helvetica', 
    }
    const AppBarStyle={ 
        backgroundColor:'#284b63', 
        paddingRight:'180px', 
        fontFamily:'Open Sans-Regular, Helvetica' 
    }
    const ButtonStyles={ 
        color:'#fff', 
        backgroundColor:'#284b63', 
        borderRadius:'30px', 
        borderColor:'#fff', 
        width:'120px' 
    }
    return (
        <AppBar position="static" elevation={0} style={AppBarStyle}>
            <Toolbar style={{ display:'flex', justifyContent:'flex-end'}}>
                <div>
                    {/* Your navigation links */}
                    <Button style={menuStyles}>Home</Button>
                    <Button style={menuStyles}>About</Button>
                    <Button style={menuStyles}>Gallery</Button>
                    <Button style={menuStyles}>Event</Button>
                    <Button variant="outlined" style={ButtonStyles}>
                        <Link to='/'>Login</Link>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default LandingNav;