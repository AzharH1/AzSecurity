export type formDataType = {
  email: string;
  password: string;
  checkbox: boolean;
};
export type errorTypes = {
  email?: string;
  password?: string;
  checkbox?: string;
};

const isValidEmail = (email: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: formDataType) => {
  let newErrors: errorTypes = {};
  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    newErrors.email = "Invalid email format";
  }
  if (!formData.password) {
    newErrors.password = "Password is required";
  }

  if (!formData.checkbox) {
    newErrors.checkbox = "Terms of Use is required";
  }

  return newErrors;
};
