import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../shared/hooks"; // Importa el hook useRegister
import { Input } from "./Input";
import AnimatedBackground from "./AnimatedBackground";
import logo from "../assets/img/logo.png"; // Importa tu logo

export const Register = ({ switchAuthHandler }) => {
  const navigate = useNavigate();
  const { register, isLoading } = useRegister();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(formData.name, formData.email, formData.password, formData.address, formData.phone);
  };

  return (
    <AnimatedBackground>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src={logo} width="100" alt="Logo" />
              <span className="text-gray-300">Create your account</span>
            </div>
            <form onSubmit={handleRegister}>
              <Input
                field="name"
                label="Name"
                type="text"
                value={formData.name}
                onChangeHandler={handleInputChange}
                showErrorMessage={false}
              />
              <Input
                field="email"
                label="Email"
                type="email"
                value={formData.email}
                onChangeHandler={handleInputChange}
                showErrorMessage={false}
              />
              <Input
                field="password"
                label="Password"
                type="password"
                value={formData.password}
                onChangeHandler={handleInputChange}
                showErrorMessage={false}
              />
              <Input
                field="address"
                label="Address"
                type="text"
                value={formData.address}
                onChangeHandler={handleInputChange}
                showErrorMessage={false}
              />
              <Input
                field="phone"
                label="Phone"
                type="text"
                value={formData.phone}
                onChangeHandler={handleInputChange}
                showErrorMessage={false}
              />
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Register Now"}
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-4">
              <span
                className="text-sm hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                onClick={switchAuthHandler}
              >
                Already have an account?
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default Register;
