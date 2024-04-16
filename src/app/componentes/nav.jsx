// components/Navbar.js
"use client";
import Profile from "./Profile";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo01.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        setIsOpen(false); // Close the menu after logout
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <nav className="bg-[black] border-b border-white text-[#D9D9D9] p-2 rounded-lg flex md:flex-row">
      <div className="container justify-between mx-auto flex md:flex-row md:items-center ">
        <div className="flex p-0">
          <Link href="/">
            <Image src={Logo} alt="" width={100} height={100} />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 font-extrabold text-xl">
            {/* Navigation links */}
            <li className="font-extrabold ml-4">
              <Link href="/">
                <p className="hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Inicio
                </p>
              </Link>
            </li>
            <li>
              <Link href="/servicios">
                <p className="hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Servicios
                </p>
              </Link>
            </li>
            <li>
              <Link href="/trabajos">
                <p className="hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Trabajos
                </p>
              </Link>
            </li>
            <li>
              <Link href="/Contacto">
                <p className="hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Contacto
                </p>
              </Link>
            </li>
            <li>
              <Link href="/login2">
                <p
                  className="hover:text-red-300 cursor-pointer hover:border-b hover:border-t"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  {isLoggedIn ? "Cerrar sesión" : "Iniciar Sesión"}
                </p>
              </Link>
            </li>
            <li className="">
              <Profile />
            </li>
          </ul>
        </div>
        {/* Floating button for mobile */}
        <div className="md:hidden absolute top-4 right-4 z-10">
          <button
            className="bg-black text-white p-4 rounded-full shadow-lg focus:outline-none"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute inset-x-0 top-0 z-0 border-b border-red-100 bg-black bg-opacity-95 text-white p-4 rounded-b-3xl">
            <ul className="flex flex-col space-y-2 text-center font-bold">
              {/* Navigation links */}
              <li>
                <Link href="/">
                  <p
                    className="hover:text-gray-300 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Inicio
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <p
                    className="hover:text-gray-300 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Servicios
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/trabajos">
                  <p
                    className="hover:text-gray-300 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Trabajos
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/Contacto">
                  <p
                    className="hover:text-gray-300 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Contacto
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/login2">
                  <p
                    id="login"
                    className="hover:text-[#CD6155] cursor-pointer"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                  >
                    {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
                  </p>
                </Link>
              </li>
              <li>
                <p className="p-2 mr-4 justify-center  flex">
                  <Profile />
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
