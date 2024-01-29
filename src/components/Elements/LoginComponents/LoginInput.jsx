import React from "react";
import { TextField } from "@mui/material";

const LoginInput = ({label, placeholder, type}) =>{
    return <TextField label={label} placeholder={placeholder} type={type} variant="standard" fullwidth sx={{ width: '340px' }} required={true}/>
}

export default LoginInput;