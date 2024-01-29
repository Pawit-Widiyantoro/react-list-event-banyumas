import React from "react";
import Grid from '@mui/material/Grid';

const LoginImage = () => {
    const gridStyles = {
        backgroundColor: '#fff', // Adjust the color as needed
      };
    return (
        <Grid item xs={7} style={gridStyles}>
            <img 
                src="/assets/icon-login-2.png" 
                style={{
                    width: '806px',
                    height: '792px',
                    overflowClipMargin: 'content-box',
                    overflow: 'clip',
                    padding: '20px',
                }}/>
        </Grid>
    )
}

export default LoginImage;