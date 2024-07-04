import React, { useState } from "react";
import { Input } from "./Input.jsx"; // Asegúrate de que la ruta sea correcta
import "./Login.css"; // Asegúrate de crear y enlazar este archivo CSS
import AnimatedBackground from "./AnimatedBackground.jsx";

export const Register = ({ switchAuthHandler }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInputBlur = (value, field) => {
    if (!value) {
      setFormErrors({ ...formErrors, [field]: `${field} is required` });
    } else {
      setFormErrors({ ...formErrors, [field]: '' });
    }
  };

  return (
    <AnimatedBackground>
    <div className="form-container">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto bg-white rounded-md shadow-2xl overflow-hidden">
        <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center relative">
          <div className="bg-black opacity-20 inset-0 z-0 absolute"></div>
          <div className="w-full mx-auto px-10 lg:px-20 flex-col items-center space-y-6 relative z-10">
            <h1 className="text-white font-bold text-4xl font-sans text-center lg:text-left">
              DUA
            </h1>
            <p className="text-white mt-1 text-center lg:text-left">Shop smarter, live better</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href="#"
                className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Home Page
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white p-8 lg:p-16 space-y-8">
          <div className="w-full">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center lg:text-left">
                Welcome!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8 text-center lg:text-left">
                Create your account
              </p>
              <div className="flex flex-col lg:flex-row -mx-3">
                <div className="w-full lg:w-1/2 px-3 mb-5">
                  <Input
                    field="firstName"
                    label="First name"
                    type="text"
                    value={formData.firstName}
                    onChangeHandler={handleInputChange}
                    onBlurHandler={handleInputBlur}
                    showErrorMessage={formErrors.firstName}
                    validationMessage={formErrors.firstName}
                  />
                </div>
                <div className="w-full lg:w-1/2 px-3 mb-5">
                  <Input
                    field="lastName"
                    label="Last name"
                    type="text"
                    value={formData.lastName}
                    onChangeHandler={handleInputChange}
                    onBlurHandler={handleInputBlur}
                    showErrorMessage={formErrors.lastName}
                    validationMessage={formErrors.lastName}
                  />
                </div>
              </div>
              <div className="flex flex-col -mx-3">
                <div className="w-full px-3 mb-5">
                  <Input
                    field="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChangeHandler={handleInputChange}
                    onBlurHandler={handleInputBlur}
                    showErrorMessage={formErrors.email}
                    validationMessage={formErrors.email}
                  />
                </div>
              </div>
              <div className="flex flex-col -mx-3">
                <div className="w-full px-3 mb-0">
                  <Input
                    field="password"
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChangeHandler={handleInputChange}
                    onBlurHandler={handleInputBlur}
                    showErrorMessage={formErrors.password}
                    validationMessage={formErrors.password}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Register Now
              </button>
              <div className="flex justify-between mt-4">
                <a
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                  onClick={switchAuthHandler}
                >
                  Already have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </AnimatedBackground>
  );
};

export default Register;
