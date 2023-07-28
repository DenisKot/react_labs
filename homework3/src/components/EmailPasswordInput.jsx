import React from 'react';
import TextField from '@mui/material/TextField';

const EmailPasswordInput = ({ label, type, value, onChange, onBlur, error }) => {
  return (
    <div style={{ margin: '20px' }}>
      <TextField
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error}
        helperText={error}
      />
    </div>
  );
};

export default EmailPasswordInput;
