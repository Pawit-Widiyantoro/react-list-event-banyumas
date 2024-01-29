import React from "react";
import LoginButton from "../Elements/LoginComponents/LoginButton";
import LoginInput from "../Elements/LoginComponents/LoginInput";
import LoginLabel from "../Elements/LoginComponents/LoginLabel";
import LoginTitle from "../Elements/LoginComponents/LoginTitle";
import { StyledLoginForm } from "../Theme/LoginFormStyles";
import Grid from '@mui/material/Grid';
import LoginCheckbox from "../Elements/LoginComponents/LoginCheckbox";
import LoginImage from "../Elements/LoginComponents/LoginImage";
import AuthLayout from "../Layouts/AuthLayout";

const LoginForm = ({onsubmit}) =>{

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        onsubmit();
    }
    const containerStyles = {
        textAlign : "center"
    };

    return(
        <Grid container spacing={2} style={containerStyles}>
            <LoginImage />
            <Grid item xs={5}>
                <StyledLoginForm onSubmit={handleFormSubmit}>
                    <Grid container spacing={2} style={containerStyles}>
                        <Grid item xs={12}>
                        <LoginTitle text="Sign In" />
                        <LoginLabel text="Welcome to List Event Banyumas" />
                        </Grid>
                        <Grid item xs={12}>
                        <LoginInput label="Username" placeholder="Enter your username" type="text" />
                        </Grid>
                        <Grid item xs={12}>
                        <LoginInput label="Password" placeholder="Enter your password" type="password" />
                        </Grid>
                        <Grid item xs={12}>
                        {/* Add the new LoginCheckbox component here */}
                        <LoginCheckbox label="Remember me" />
                        </Grid>
                        <Grid item xs={12}>
                        <LoginButton text="Login" onClick={onsubmit} />
                        </Grid>
                        <Grid item xs={12}>
                        <LoginLabel text="Belum punya akun?" linkText=" Register" to="/register" /> 
                        </Grid>
                    </Grid>   
                </StyledLoginForm>
            </Grid>
        </Grid>
    )
}

export default LoginForm;