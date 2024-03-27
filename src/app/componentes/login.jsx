"use client";
import React from "react";
import { useState } from "react";
import Logo from "../../../public/logo01.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
  };

  const handleGoogleLogin = () => {
    // Lógica para manejar el inicio de sesión con Google
  };

  return (
    <main className=" min-h-screen bg-gradient-to-br from-[#F2F2F2] to-negro">
      <div className="flex justify-center">
        <h1 className=" text-gris text-center mt-10 mb-20 text-3xl font-bold italic font-italic">
          Bienvenido a Evolution Tattoo <br />
          <TypeAnimation
            sequence={["Inicia", 1000, "Sesión", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center ">
        <div className="md:w-1/2 md:order-1 mb-8 md:mb-0 p-2">
          <Image
            id="principal"
            src={Logo}
            alt="Login"
            className="object-cover w-full h-full rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/3 md:order-2 md:m-10 sm:m-10 bg-negro p-8 rounded-lg shadow-lg">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Iniciar Sesión
            </h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 bg-opacity-50 px-4 py-2 rounded-md text-white mb-4 focus:outline-none focus:bg-opacity-70"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 bg-opacity-50 px-4 py-2 rounded-md text-white mb-4 focus:outline-none focus:bg-opacity-70"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-cafe hover:bg-blue-600 text-negro font-bold py-2 rounded-md focus:outline-none focus:bg-blue-600"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-rosado hover:bg-red-600 text-negro font-bold py-2 rounded-md mt-2 focus:outline-none focus:bg-red-600"
            >
              Iniciar con Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
