"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Google from "../../../public/google.webp";
import Logon from "../../../public/logo01.png";
import {
  getAuth,
  signInWithRedirect,
  signOut, // Agrega el método de cierre de sesión
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import Profile from "../componentes/Profile";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "../../../firebase.config";
import Modal from "../componentes/modal"; // Asegúrate de que esta ruta sea correcta

const LoginWithGoogle = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para rastrear el estado de inicio de sesión

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
        const userEmail = user.email;
        setIsModalOpen(true);
        checkAdminPermissions(userEmail);
        setIsLoggedIn(true); // Establece isLoggedIn en true si el usuario está autenticado
      } else {
        setIsAdmin(false);
        setIsLoggedIn(false); // Establece isLoggedIn en false si no hay usuario autenticado
      }
    });
  }, []);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuario autenticado:", user);
        setIsLoggedIn(true); // Establece isLoggedIn en true después del inicio de sesión
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); // Establece isLoggedIn en false después del cierre de sesión
        console.log("Usuario desconectado.");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <div className="p-2 flex items-center text-white flex-col justify-center">
      <div className="m-4">
        <Profile />
      </div>

      <div className="">
        <div className="flex border rounded py-4 justify-center  hover:bg-white hover:text-extrabold hover:text-black">
          <Image
            src={Google}
            width={100}
            height={100}
            alt="logo"
            className="w-10 h-auto mx-2"
          />

          <button
            onClick={isLoggedIn ? handleLogout : handleGoogleSignIn}
            className="text-center justify-center items-center flex pr-4 "
          >
            {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión con Google"}
          </button>
        </div>
        <div className="flex mt-4 mb-4 text-[red]">
          {isAdmin ? (
            <div className="text-[green] font-extrabold">
              <p>Tienes permisos de administrador.</p>
            </div>
          ) : (
            <div className="">
              <p className=""></p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Image src={Logon} alt="logo" width={500} height={500} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <h2 className="text-lg font-medium text-center text-white">
            Autenticación
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Has iniciado sesión correctamente.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default LoginWithGoogle;
