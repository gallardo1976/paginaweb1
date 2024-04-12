"use client";
// components/Navbar.js
import Profile from "./Profile";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo01.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[black]  border-b border-white text-[#D9D9D9] p-2 rounded-lg flex md:flex-row">
      <div className="container  justify-between mx-auto flex md:flex-row md:items-center ">
        <div className="flex    p-0">
          <Link href="/">
            <Image src={Logo} alt="" width={100} height={100} />
          </Link>
        </div>
        <div className="hidden  md:block">
          <ul className="flex space-x-4 font-extrabold text-xl">
            <li className="font-extrabold ml-4">
              <Link href="/">
                <p className=" hover:text-red-300 cursor-pointer  hover:border-b hover:border-t">
                  Inicio
                </p>
              </Link>
            </li>
            <li>
              <Link href="/servicios">
                <p className=" hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Servicios
                </p>
              </Link>
            </li>
            <li>
              <Link href="/trabajos">
                <p className=" hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Trabajos
                </p>
              </Link>
            </li>
            <li>
              <Link href="/Contacto">
                <p className=" hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Contacto
                </p>
              </Link>
            </li>
            {/* <li>
              <Link href="/login">
                <p className=" hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Iniciar Sesion
                </p>
              </Link>
            </li> */}
            <li>
              <Link href="/login2">
                <p className=" hover:text-red-300 cursor-pointer hover:border-b hover:border-t">
                  Iniciar Sesión
                </p>
              </Link>
            </li>
            <li>
              <Profile />
            </li>
          </ul>
        </div>
        <div className="md:hidden mt-4  md:mt-0">
          <button
            className="text-white  focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Icono del menú aquí */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu h-6 w-6"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden ">
            <ul className="mt-4 space-y-2 text-white font-bold text-center">
              <li>
                <Link href="/">
                  <p className=" hover:text-gray-300 cursor-pointer border-b">
                    Inicio
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <p className=" hover:text-gray-300 cursor-pointer border-b">
                    Servicios
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/trabajos">
                  <p className=" hover:text-gray-300 cursor-pointer border-b">
                    Trabajos
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/Contacto">
                  <p className=" hover:text-gray-300 cursor-pointer border-b">
                    Contacto
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/login2">
                  <p className=" hover:text-[#CD6155] cursor-pointer border-b">
                    Iniciar sesion
                  </p>
                </Link>
              </li>
              <li>
                <Profile />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
