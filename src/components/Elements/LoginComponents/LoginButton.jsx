import React from 'react';
import Button from '@mui/material/Button';

const LoginButton = ({text, onclick}) => {
    const buttonStyle = {
        width : '310px',
        height : '52px',
        backgroundColor : '#284b63'
    }
    return <Button variant='contained' color='primary' onclick={onclick} style={buttonStyle}>{text}</Button>
}

export default LoginButton;