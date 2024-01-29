// LoginCheckbox.jsx
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const LoginCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default LoginCheckbox;
