import React from "react";
import { InputLabel, Input, Paper, Grid, TextareaAutosize, Button } from "@mui/material";

const LeftPaper= () => {
    // inline styles
    const LeftPaperStyles={
        borderTop:'5px solid #3C6E71', 
        borderBottom:'5px solid #3C6E71', 
        borderRadius:0, 
        width:'670px', 
        height: '645px' 
    }
    const InputBorder={ 
        border: '1px solid black', 
        borderRadius:'10px', 
        marginTop:'10px', 
        height:'50px' 
    }
    
    return(
        <>
        <Paper style={LeftPaperStyles}>
            <Grid item xs={12} style={{ padding:'20px 20px' }}>
                <Grid item xs={12} style={{ display:'flex' }}>
                    <Grid item xs={6} style={{ padding :'0 30px' }}>
                        <InputLabel>Your Name</InputLabel>
                        <Input disableUnderline={true} fullWidth style={InputBorder} />
                    </Grid>
                    <Grid item xs={6} style={{ padding :'0 30px' }} >
                        <InputLabel>Your Email</InputLabel>
                        <Input disableUnderline={true}  fullWidth style={InputBorder}  />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ padding :'0 30px', marginTop:'20px' }}>
                    <InputLabel>Subject</InputLabel>
                    <Input disableUnderline={true} fullWidth style={InputBorder} />
                </Grid>
                <Grid item xs={12} style={{ padding :'0 30px', marginTop:'20px' }}>
                    <InputLabel>Message</InputLabel>
                    <TextareaAutosize style={{ border: '1px solid black', borderRadius:'10px', marginTop:'10px', height:'230px', width: '100%', }} />
                </Grid>
                <Grid item xs={12} style={{ padding :'0 30px', marginTop:'20px', textAlign:'center' }}>
                    <Button variant="contained" style={{ backgroundColor:'#284b63', borderRadius:'20px'}}>
                        Send Message
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </>
    )
}
export default LeftPaper;