import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const About2 = () => {
    const spanStyles={
        fontFamily:'Just-Bold, Helvetica',
        fontWeight:'700px',
        color:'#284b63'
    }
    const titleStyles={
        fontFamily:'Jost-Regular, Helvetica',
        fontWeight:'400px',
        fontSize:'34px'
    }
    const paragraphStyles={      
        fontFamily:'Poppins-Regular, Helvetica',
        fontWeight: '400',
        fontSize: '15px',
        textAlign:'justify'
    }
    return(
        <Grid container style={{ display:'flex', padding:'40px 50px 40px 50px' }}>
            <Grid item xs={6}>
                <Typography style={titleStyles}>Eum ipsam laborum deleniti <span style={spanStyles}>velit pariatur architecto aut nihil</span></Typography>
                <br />
                <Typography style={paragraphStyles}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in
                    reprehenderit Non consectetur a erat nam at lectus urna
                    duis?&nbsp;&nbsp;Feugiat pretium nibh ipsum consequat. Tempus
                    iaculis urna id volutpat lacus laoreet non curabitur gravida.
                    Venenatis lectus magna fringilla urna porttitor rhoncus dolor
                    purus non.
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src="./assets/landing-page-2.png"/>
            </Grid>
            <IconButton
            style={{ marginLeft:'auto',color:'#284b63', border:'5px solid #284b63', fontWeight:'bold' }}
            >
            < ArrowUpwardRoundedIcon />
            </IconButton>
        </Grid>
    )
}
export default About2;