"use client";
//Add back the password checker function FOR PROD
import { ChangeEvent, FormEvent, useState } from "react";
import { validateForm, formDataType, errorTypes } from "./signupvalidation";
import { registerUser } from "./registerUser";

function SignUpForm() {
  const [formData, setFormData] = useState<formDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState<errorTypes>({});

  function isFormErrorsEmpty(formData: formDataType): boolean {
    setErrors(validateForm(formData));
    return Object.keys(validateForm(formData)).length === 0;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = isFormErrorsEmpty(formData);
    if (isValid) {
      console.log("Form Submitted", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkbox: false,
      });
      //Make sure that password is not being sent unencrypted,
      registerUser(formData);
    } else {
      console.log("Form Validation Failed");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <form className="rightbox w-1/2" onSubmit={handleSubmit}>
      <div className="whitespace p-10 w-full space-y-1 flex flex-col">
        <h1 className="text-2xl">Register</h1>
        <p className="pt-2">
          Create your account. Its free and takes a minute!
        </p>
        <div className="flex flex-col space-y-1 md:space-y-0 xl:flex-row xl:space-x-2">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-400 py-1 px-1 firstname rounded-sm w-full"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
            />
            {errors.firstName && (
              <div className="error text-red-500">{errors.firstName}</div>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-400 py-1 px-1 lastname rounded-sm w-full"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
            />
            {errors.lastName && (
              <div className="error text-red-500">{errors.lastName}</div>
            )}
          </div>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 py-1 px-2 rounded-sm"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        ></input>{" "}
        {errors.email && (
          <div className="error text-red-500">{errors.email}</div>
        )}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 py-1 px-2 rounded-sm"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        ></input>{" "}
        {errors.password && (
          <div className="error text-red-500">{errors.password}</div>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-400 py-1 px-2 confirmPassword rounded-sm"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
        ></input>{" "}
        {errors.confirmPassword && (
          <div className="error text-red-500">{errors.confirmPassword}</div>
        )}
        <div className=" flex justify-between flex-col sm:flex-row">
          <div className="flex  justify-center  flex-col">
            <div className="flex space-x-1">
              <input
                type="checkbox"
                className="checkbox border border-gray-400 "
                name="checkbox"
                onChange={handleCheckboxChange}
                checked={formData.checkbox}
              ></input>
              <p className="text-xs">
                I accept the{" "}
                <a className="text-blue-500 font-semibold" href="">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a className="text-blue-500 font-semibold" href="">
                  Privacy Policy
                </a>
              </p>
            </div>

            {errors.checkbox && (
              <div className="error text-red-500">{errors.checkbox}</div>
            )}
          </div>

          <div className="text-center">
            <a href="/login" className="text-blue-500 font-semibold">
              Already Registered?
            </a>
          </div>
        </div>
        <button className="bg-cyan-300 hover:bg-cyan-200 hover:transition-opacity p-1 rounded-md">
          Register Now!
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
