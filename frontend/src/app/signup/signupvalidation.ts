export type formDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
};
export type errorTypes = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  checkbox?: string;
};

const isValidEmail = (email: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string) => {
  const symbolRegex = /[! @#$%^&*(),.?":{}|<>]/;
  const numberRegex = /[0-9]/;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  return (
    password.length >= 3 //&&
    // symbolRegex.test(password) &&
    // numberRegex.test(password) &&
    // upperCaseRegex.test(password) &&
    // lowerCaseRegex.test(password)
  );
};

export const validateForm = (formData: formDataType) => {
  let newErrors: errorTypes = {};
  if (!formData.firstName) {
    newErrors.firstName = "First name is required";
  }
  if (!formData.lastName) {
    newErrors.lastName = "Last name is required";
  }
  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    newErrors.email = "Invalid email format";
  }
  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (!isValidPassword(formData.password)) {
    newErrors.password =
      "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowecase letter";
  }
  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Confirm password is required";
  } else if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = "Password must match";
  }
  if (!formData.checkbox) {
    newErrors.checkbox = "Terms of Use is required";
  }

  return newErrors;
};
