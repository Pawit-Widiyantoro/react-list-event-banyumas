import React, {useState, useEffect} from "react";
import { Grid, MobileStepper, IconButton } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Carousel from "../../Fragments/Carousel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Events = () => {
    const images=[
        {
            label:'image 1',
            path:'./assets/gambar6-2.png'
        },
        {
            label:'image 2',
            path:'./assets/gambar1-2.png'
        },
        {
            label:'image 3',
            path:'./assets/gambar2-2.png'
        }
    ];

    const [activeStep, setActiveStep] = useState(0);
    const maxStep = images.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxStep);
        }, 25000);

        return () => {
            clearInterval(interval);
        }
    }, [maxStep]);

    return(
        <>
        <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={(index) => setActiveStep(index)}
            enableMouseEvents
        >
            {images.map((image, index) => (
                <Carousel key={index} image={image} />
            ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            variant="dots"
            steps={maxStep}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto', justifyContent: 'center', backgroundColor: 'transparent' }}
        />
        <Grid item xs={12} style={{ paddingRight:'50px', marginTop:'15px' }}>
            <IconButton style={{ display:'flex',marginLeft:'auto',color:'#284b63', border:'5px solid #284b63', fontWeight:'bold' }}>
                < ArrowUpwardRoundedIcon />
            </IconButton>
        </Grid>
        </>
    )
}
export default Events;