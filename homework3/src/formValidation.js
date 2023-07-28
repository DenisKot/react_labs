// formValidation.js

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,10}$/;
  return passwordRegex.test(password);
};

const isNameValid = (name) => {
  const nameRegex = /^[A-Za-z]{2,}$/;
  return nameRegex.test(name);
};

export { isEmailValid, isPasswordValid, isNameValid };
