import React from "react";
import { Typography, Grid} from "@mui/material";

const Carousel = ({image}) => {
    const titleStyles={
        fontFamily: "Jost-ExtraBold, Helvetica",
        fontWeight: '800px',
        color: '#ffffff',
        fontSize: '32px'
    }
    const containerTitle={
        fontFamily: "Satisfy-Regular, Helvetica",
        fontWeight: '400px',
        color: '#ffffff',
        fontSize: '32px',
        textAlign:'center'
    }
    const containerSubtitle={
        fontFamily: "Poppins-Regular, Helvetica",
        fontWeight: '400px',
        color: '#ffffff',
        fontSize: '15px',
        padding:'50px 50px',
        textAlign:'justify'
    }
    return(
    <Grid container style={{ backgroundColor: '#3C6E71', padding: '20px 100px 80px 100px', color: 'white' }}>
        <Grid item xs={12}>
            <Typography style={{ ...titleStyles, textAlign: 'center' }}>Events</Typography>
            <hr style={{ width: '200px', margin: 'auto' }} />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', marginTop: '100px' }}>
            <Grid item xs={6} >
                <img src={image.path} alt={image.label} />
            </Grid>
            <Grid item xs={6}>
                <Typography style={containerTitle}>Festival</Typography>
                <Typography style={containerSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.<br /><br /><br /><br />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default Carousel;