
import React, { useRef } from 'react';
import { isEmailValid, isPasswordValid, isNameValid } from '../formValidation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UncontrolledForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();

  const handleSubmit = () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;

    const isEmailValidResult = isEmailValid(email);
    const isPasswordValidResult = isPasswordValid(password);
    const isFirstNameValidResult = isNameValid(firstName);
    const isLastNameValidResult = isNameValid(lastName);

    if (isEmailValidResult && isPasswordValidResult && isFirstNameValidResult && isLastNameValidResult) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form contains errors!');
    }
  };

  return (
    <div>
      <TextField
        label="Email"
        inputRef={emailInputRef}
      />
      <div style={{ color: 'red' }}></div>
      <TextField
        label="Password"
        type="password"
        inputRef={passwordInputRef}
      />
      <div style={{ color: 'red' }}></div>
      <TextField
        label="First Name"
        inputRef={firstNameInputRef}
      />
      <div style={{ color: 'red' }}></div>
      <TextField
        label="Last Name"
        inputRef={lastNameInputRef}
      />
      <div style={{ color: 'red' }}></div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default UncontrolledForm;
