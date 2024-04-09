"use client";
import Profile from "../componentes/Profile";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Google from "../../../public/google.webp";
import Logon from "../../../public/logo01.png";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "../../../firebase.config";

const LoginWithGoogle = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminPermissions = async (userEmail) => {
      try {
        const firestore = getFirestore();
        const docRef = doc(firestore, "administradores", "1123318628");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const adminEmail = docSnap.data().Email;
          setIsAdmin(userEmail === adminEmail);
        } else {
          console.log("El documento de administrador no existe.");
          setIsAdmin(false);
        }
      } catch (error) {
        console.error(
          "Error al obtener el correo electrónico del administrador:",
          error
        );
        setIsAdmin(false);
      }
    };

    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Usuario autenticado
        const userEmail = user.email;
        alert("Usuario Autenticado");
        checkAdminPermissions(userEmail);
      } else {
        // No hay usuario autenticado
        setIsAdmin(false);
      }
    });
  }, []);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider)
      .then((result) => {
        // El usuario ha iniciado sesión correctamente
        const user = result.user;
        console.log("Usuario autenticado:", user);
      })
      .catch((error) => {
        // Hubo un error al iniciar sesión
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  return (
    <div className=" p-6 flex items-center flex-col justify-center font-jersey">
      <div className="m-4">
        <Profile />
      </div>

      <div className="bg-black   ">
        <div className=" flex border rounded py-4  hover:bg-white hover:text-black">
          <Image
            src={Google}
            width={100}
            height={100}
            alt="logo"
            className="w-10 h-auto mx-2"
          />
          <button onClick={handleGoogleSignIn} className="">
            Iniciar sesion con Google
          </button>
        </div>
        <div className=" flex mt-4 mb-4 text-[red]">
          {isAdmin ? (
            <div className=" ">
              <p>Tienes permisos de administrador.</p>
            </div>
          ) : (
            <div className=" ">
              <p className="">No tienes permisos de administrador.</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Image src={Logon} alt="logo" width={500} height={500} />
      </div>
    </div>
  );
};

export default LoginWithGoogle;
