import React from "react";
import { Typography, Grid } from "@mui/material";
import RightPaper from "../../Fragments/RightPaper";
import LeftPaper from "../../Fragments/LeftPaper";

const Contact = () => {
    
    
    return(
        <Grid container>
            <Grid item xs={9} style={{ padding:'5px 30px', margin:'0 auto 30px auto' }}>
                <Typography variant="h4" style={{ textAlign:'center' }}>Contact</Typography>
                <Typography variant="subtitle3" style={{ textAlign:'center' }}> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                    aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                    quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                    fugiat sit in iste officiis commodi quidem hic quas.
                </Typography>
            </Grid>
            <Grid item xs={12} style={{ display:'flex', justifyContent:'center', alignItems:'center', padding:'5px 50px' }}>
                {/* Rightpaper */}
                <RightPaper/>
                {/* Leftpaper */}
                <LeftPaper/>
            </Grid>
        </Grid>
    )
}
export default Contact;