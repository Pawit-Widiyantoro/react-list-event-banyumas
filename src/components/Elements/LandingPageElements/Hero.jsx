import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
    const text= {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff'
    }
    const buttonStyles={
        backgroundColor:'#d9d9d9', 
        color:'#284b63',
        width:'111px',
        height:'35px',
        borderRadius:'30px',
        marginTop:'30px'
    }
    const titleStyles={ 
        fontFamily: "Jost-ExtraBold, Helvetica", 
        fontWeight:'800px', 
        fontSize:'48px' 
    }
    const subtitleStyles={ 
        fontFamily: "Jost-SemiBold, Helvetica", 
        fontWeight:'600px', 
        fontSize:'24px' 
    }
    return(
        <Grid container style={{ backgroundColor : '#284b63',paddingTop:'50px',paddingBottom:'50px' }}>
            <Grid item xs={6} style={text}>
                <Grid item xs={12} style={{ paddingLeft:'70px' }}>
                    <Typography style={titleStyles}>List Event Banyumas</Typography><br />
                    <Typography style={subtitleStyles}>Memberikan Informasi mengenai event yang ada di Kabupaten Banyumas beserta pemesanan tiket event.</Typography>
                    <Button variant="contained" style={buttonStyles}>
                        <Link to='/'>Login</Link>
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={6} >
            <img 
                src="/assets/icon-login-1.png" 
                />
            </Grid>

        </Grid>
    )
}
export default Hero;