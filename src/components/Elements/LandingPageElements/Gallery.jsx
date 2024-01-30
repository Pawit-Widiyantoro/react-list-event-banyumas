import React from "react";
import { Typography, Grid, Divider, IconButton } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const Gallery=() => {
    const imgStyles={
        marginBottom:'20px',
        marginRight:'20px'
    }
    const titleStyles={
        fontFamily: "Jost-ExtraBold, helvetica",
        fontWeight: "800",
        color: "#284b63",
        fontSize: '32px',
        textAlign:'center'
    }
    const subtitleStyles={
        marginBottom:'30px',
        fontFamily:'Open Sans-Regular, Helvetica',
        fontWeight:'400px',
        fontSize:'15px',
        textAlign:'center'
    }
    return(
        <Grid style={{paddingBottom:'30px' }}>
            <Typography style={titleStyles}>Some Photos from Event</Typography>
            <br />
            <Divider
                style={{
                    width: '500px',
                    backgroundColor: 'black', // Set background color
                    margin: 'auto',
                }}
            /> <br />
            <Typography style={subtitleStyles}>Lorem ipsum dolot sit amet, consesctetur adipscing eliy, sed do eusmod tempor incididunt ut labore et dolore magna alliqua.</Typography>
            <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                <img style={imgStyles} src="./assets/gambar1-1.png"/>
                <img style={imgStyles} src="./assets/gambar2-1.png"/>
                <img style={imgStyles} src="./assets/gambar3-1.png"/>
                <img style={imgStyles} src="./assets/gambar4-1.png"/>
            </Grid>
            <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                <img style={imgStyles} src="./assets/gambar5-1.png"/>
                <img style={imgStyles} src="./assets/gambar6-1.png"/>
                <img style={imgStyles} src="./assets/gambar7-1.png"/>
                <img style={imgStyles} src="./assets/gambar8-1.png"/>
            </Grid>
            <Grid item xs={12} style={{ paddingRight:'50px', marginTop:'50px' }}>
                <IconButton style={{ display:'flex',marginLeft:'auto',color:'#284b63', border:'5px solid #284b63', fontWeight:'bold' }}>
                    < ArrowUpwardRoundedIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Gallery;