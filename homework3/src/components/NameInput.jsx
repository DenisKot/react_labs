import React from 'react';
import TextField from '@mui/material/TextField';

const NameInput = ({ label, value, onChange, onBlur, error }) => {
  return (
    <div style={{ margin: '20px' }}>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error}
        helperText={error}
      />
    </div>
  );
};

export default NameInput;
