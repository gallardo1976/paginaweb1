"use client";
import Google from "../../../public/google.webp";
import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../../public/logo01.png";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { firebaseConfig } from "../../../firebase.config";
import { useRouter } from "next/navigation";
const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const Login = () => {
  const navigate = useRouter();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        navigate.push("/home");
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("su usuario esta registrado, Inicia sesion");
        const user = userCredential.user;
        console.log("user", user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);

        if (error.code === "auth/email-already-in-use") {
          alert("El correo electrónico ya está en uso");
        } else if (error.code === "auth/invalid-email") {
          alert("El correo electrónico no es válido.");
        } else if (error.code === "auth/operation-not-allowed") {
          alert("Operación no permitida.");
        } else if (error.code === "auth/weak-password") {
          alert("La contraseña es demasiado débil.");
        } else {
          console.error("Error desconocido:", error);
        }
      });
  };

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sing In");
        navigate.push("/home");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email") {
          setError("El correo electrónico es invalido");
        } else if (error.code === "auth/invalid-credential") {
          setError("El correo electrónico no está registrado.");
        } else if (error.code === "auth/missing-password") {
          setError("La contraseña es incorrecta.");
        } else {
          console.error("Error desconocido:", error);
        }
      });
  };

  return (
    <main className=" bg-black">
      <div className="flex justify-center">
        <h1 className=" text-[#F2F2F2] text-center mt-10 mb-20 text-3xl font-bold  font-italic">
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
        <div className="md:w-1/2 md:order-1 mb-4 md:mb-0 p-2">
          <Image
            id="principal"
            src={Logo}
            alt="Login"
            className="object-cover w-full h-full rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/3 md:order-2 md:m-10 sm:m-10 bg-gradient-to-br from-[#5f5151] to-negro  p-8 rounded-lg shadow-lg">
          <div className="text-center  md:text-left">
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
              onClick={handleSingIn}
              className="w-full bg-rosadohover:bg-negro bg-[black] hover:bg-black hover:text-white text-negro font-bold py-2 rounded-md focus:outline-none focus:bg-black-600"
            >
              Iniciar Sesión
            </button>
            <span className="text-[red]">{error} </span>

            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full bg-black  text-negro font-bold hover:bg-black hover:text-white rounded-md mt-2 focus:outline-none"
            >
              <Image
                src={Google}
                width={30}
                height={30}
                alt="no-fount"
                className="mx-2 my-1 flex justify-start"
              />
              Iniciar con Google
            </button>
            <div className="flex justify-center ">
              <button
                onClick={handleCreateAccount}
                className=" mt-2 px-10 bg-transparent hover:bg-black hover:text-white text-white font-bold py-2 rounded-md focus:outline-none "
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
