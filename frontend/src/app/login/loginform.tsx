"use client";

import { useState } from "react";
import { errorTypes, formDataType, validateForm } from "./loginvalidations";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState<errorTypes>({});

  function isFormErrorsEmpty(formData: formDataType): boolean {
    setErrors(validateForm(formData));
    return Object.keys(validateForm(formData)).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = isFormErrorsEmpty(formData);
    if (isValid) {
      console.log("Form Submitted", formData);
      setFormData({
        email: "",
        password: "",
        checkbox: false,
      });
    } else {
      console.log("Form Validation Failed");
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <form className="rightbox w-1/2" onSubmit={handleSubmit}>
      <div className="whitespace p-10 w-full space-y-1 flex flex-col">
        <h1 className="text-2xl">Login</h1>
        <p className="pt-2">Your are wonderful!</p>
        <div className="flex-col flex xl:flex-row xl:space-x-2 space-y-1 xl:space-y-0"></div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-gray-400 py-1 px-2 rounded-sm"
          onChange={handleChanges}
          value={formData.email}
        ></input>
        <div className="error text-red-500">{errors.email}</div>
        <input
          type="text"
          placeholder="Password"
          name="password"
          className="border border-gray-400 py-1 px-2 rounded-sm"
          value={formData.password}
          onChange={handleChanges}
        ></input>
        <div className="error text-red-500">{errors.password}</div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-1 ">
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
          <div className="">
            <a href="/signup" className="text-blue-500 font-semibold">
              Haven't Registered?
            </a>
          </div>
        </div>
        <div className="error text-red-500">{errors.checkbox}</div>
        <button className="bg-cyan-300 hover:bg-cyan-200 hover:transition-opacity p-1 rounded-md">
          Sign In!
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
