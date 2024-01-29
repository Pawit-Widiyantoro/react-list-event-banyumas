// AuthLayout.js
import React from "react";
import Grid from "@mui/material/Grid";
import LoginImage from "../Elements/LoginComponents/LoginImage";
import { StyledLoginForm } from "../Theme/LoginFormStyles";


const AuthLayout = ({ children, onSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Grid container spacing={2} style={{ textAlign: "center" }}>
      <LoginImage />
      <Grid item xs={5}>
        
          {children}

      </Grid>
    </Grid>
  );
};

export default AuthLayout;
