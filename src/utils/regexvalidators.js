export const regexValidate = ({ email, password }) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);

  if (!isValidEmail) return "Incorrect email address.";
  if (!isValidPassword)
    return "Password must be 8 characters long ,contain at least one lowercase, uppercase ,digit, special character.";
};
