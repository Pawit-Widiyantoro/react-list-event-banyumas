import React from "react";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const LoginLabel = ({text, linkText, to}) => {
    const labelStyles = {

       };
    return (
    <Typography variant="subtitle1" style={labelStyles}>
        {text}{linkText && to && <Link to={to}>{linkText}</Link>}
    </Typography>
    )
}

export default LoginLabel;