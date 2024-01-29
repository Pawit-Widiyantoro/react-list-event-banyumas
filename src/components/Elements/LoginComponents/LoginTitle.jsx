import React from 'react';
import { Typography } from '@mui/material';

const LoginTitle = ({text}) => {
    const titleStyles = {
       color: "#284b63",
       fontWeight:"bold",
      };

    return <Typography variant='h4' gutterBottom style={titleStyles}>{text}</Typography>
}

export default LoginTitle;