import React from "react" ;
import { Paper, Grid, Typography } from "@mui/material";  

const RightPaper= () => {
    const RightPaper={
        borderTop:'5px solid #3C6E71', 
        borderBottom:'5px solid #3C6E71', 
        borderRadius:0, 
        marginRight:'20px', 
        width: '518px',
        height: '645px'
    }
    return(
        <>
            <Paper style={RightPaper}>
                <Grid item xs={10} style={{ margin:'40px auto', padding:'0 20px' }}>
                    {/* icon 1 */}
                    <Grid item xs={12} style={{ display:'flex' }}>
                        <Grid item xs={3} >
                            <img src="./assets/location.svg"/>
                        </Grid>
                        <Grid item xs={9} container direction={"column"} justifyContent={"center"} >
                            <Typography variant="subtitle5">Location :</Typography>
                            <Typography variant="subtitle6">Banyumas, Jawa Tengah, Indonesia</Typography>
                        </Grid>
                    </Grid>
                    {/* end icon 1 */}
                    {/* icon 2 */}
                    <Grid item xs={12} style={{ display:'flex', marginTop:'40px' }}>
                        <Grid item xs={3} >
                            <img src="./assets/email.svg"/>
                        </Grid>
                        <Grid item xs={9} container direction={"column"} justifyContent={"center"} >
                            <Typography variant="subtitle5">Email :</Typography>
                            <Typography variant="subtitle6">eventbms@gmail.com</Typography>
                        </Grid>
                    </Grid>
                    {/* end icon 2 */}
                    {/* icon 3 */}
                    <Grid item xs={12} style={{ display:'flex', marginTop:'40px' }}>
                        <Grid item xs={3} >
                            <img src="./assets/phone.svg"/>
                        </Grid>
                        <Grid item xs={9} container direction={"column"} justifyContent={"center"} >
                            <Typography variant="subtitle5">Call :</Typography>
                            <Typography variant="subtitle6">+62 812 3456 7890</Typography>
                        </Grid>
                    </Grid>
                    {/* end icon 3 */}
                
                </Grid>
            </Paper>
        </>
    )
}
export default RightPaper;