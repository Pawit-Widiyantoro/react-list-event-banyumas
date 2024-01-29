import React from "react";
import { Typography, Button, Grid, Divider } from "@mui/material";

const AboutUs= () => {
    const ContainerStyles={
        backgroundColor: '#d9d9d9',
        textAlign:'center',
        marginTop:'10px',
        padding:'30px',
        color:'#284b63',
        height:'513px'
    }
    const bodyStyles={
        fontFamily: "Poppins-Regular, Helvetica",
        fontWeight: '400px',
        color: '#000000',
        fontSize: '15px',
        letterSpacing: '0',
        lineHeight: 'normal'
    }
    const titleStyles={
        fontDamily:'Jost-ExtraBold, Helvetica',
        fontWeight:'800px',
        color:'#284b63',
        fontSize:'32px'
    }
    const containerBody={
        display:'flex', 
        textAlign:'justify', 
        paddingRight:'40px', 
        paddingLeft:'40px',
        color:'black'
    }
    const ButtonStyles={
        backgroundColor:'#284b63',
        color:'white',
        marginTop:'20px',
        borderRadius:'10px',
        fontWeight:'400px',
        fontFamily:'Poppins-Regular, Helvetica',
        fontSize:'14px',
        width:'140px'
    }
    return(
        <Grid container>
            <Grid item xs={12} style={ContainerStyles}>
                <Grid item xs={12}>
                    <Typography style={titleStyles}>ABOUT US</Typography>
                    <Divider
                        style={{
                            width: '200px',
                            backgroundColor: '#284b63', // Set background color
                            margin: 'auto',
                        }}
                    />
                    <br /><br />
                </Grid>
                <Grid style={containerBody}>
                    <Grid item xs={6} style={{ paddingRight:'110px' }}>
                        <Typography style={bodyStyles}>
                                Website ini memberikan informasi lengkap mengenai berbagai event
                        yang tersedia di Kabupaten Banyumas beserta prosedur atau cara
                        pemesanan tiket untuk menghadiri event tersebut. Event-event yang
                        disebutkan dapat beragam jenisnya, termasuk konser, festival,
                        pameran seni, pertandingan olahraga, seminar, dan lain sebagainya.
                        Informasi yang diberikan meliputi detail tentang jadwal, lokasi,
                        tema, harga tiket, kontak yang dapat dihubungi untuk pemesanan,
                        serta sumber daya tambahan seperti situs web resmi, aplikasi, atau
                        platform pihak ketiga yang digunakan untuk pembelian tiket.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ paddingLeft:'20px' }}>
                        <Typography style={bodyStyles}>
                                Dengan ini, penonton atau&nbsp;&nbsp;peserta event akan dapat
                        dengan mudah mengakses semua&nbsp;&nbsp;informasi yang diperlukan
                        untuk merencanakan kehadiran&nbsp;&nbsp;mereka di event-event yang
                        ada di Kabupaten Banyumas.
                        </Typography>
                        <Button style={ ButtonStyles} >Learn More</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutUs;