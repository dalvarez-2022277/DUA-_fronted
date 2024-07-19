import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../shared/hooks"; // Importa el hook useLogin
import { Input } from "./Input";
import AnimatedBackground from "./AnimatedBackground";
import logo from "../assets/img/logo.png"; // Importa tu logo

export const Login = ({ switchAuthHandler }) => {
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (value, field) => {
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
    <AnimatedBackground>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src={logo} width="100" alt="Logo" />
              <span className="text-gray-300">Welcome Back!</span>
            </div>
            <form onSubmit={handleLogin}>
              <Input
                field="email"
                label="Email Address"
                value={email}
                onChangeHandler={handleInputChange}
                type="email"
                showErrorMessage={false}
              />
              <Input
                field="password"
                label="Password"
                value={password}
                onChangeHandler={handleInputChange}
                type="password"
                showErrorMessage={false}
              />
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-4">
              <span
                className="text-sm hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                onClick={switchAuthHandler}
              >
                Don't have an account yet?
              </span>
            </div>
          </div>
        </div>
      </div>
      </AnimatedBackground>
    </>
  );
};

export default Login;
