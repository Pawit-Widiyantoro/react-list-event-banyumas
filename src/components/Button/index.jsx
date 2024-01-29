// Button.jsx
import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text, color }) => {
  return (
    <Button variant="contained" color={color} >
      {text}
    </Button>
  );
};

export default CustomButton;
