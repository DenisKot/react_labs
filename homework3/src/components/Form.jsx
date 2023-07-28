import React, { useState } from 'react';
import EmailPasswordInput from './EmailPasswordInput';
import NameInput from './NameInput';
import { isEmailValid, isPasswordValid, isNameValid } from '../formValidation';
import Button from '@mui/material/Button';

const Form = () => {
    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameTouched, setLastNameTouched] = useState(false);
  
    const isFormValid =
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isNameValid(firstName) &&
      isNameValid(lastName);
  
    return (
      <div>
        <EmailPasswordInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          error={emailTouched && !isEmailValid(email) ? 'Invalid email format' : ''}
        />
        <EmailPasswordInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          error={passwordTouched && !isPasswordValid(password) ? 'Invalid password format' : ''}
        />
        <NameInput
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() => setFirstNameTouched(true)}
          error={firstNameTouched && !isNameValid(firstName) ? 'Invalid first name format' : ''}
        />
        <NameInput
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={() => setLastNameTouched(true)}
          error={lastNameTouched && !isNameValid(lastName) ? 'Invalid last name format' : ''}
        />
        <Button variant="contained" color="primary" disabled={!isFormValid}>
          Submit
        </Button>
      </div>
    );
  };

export default Form;
