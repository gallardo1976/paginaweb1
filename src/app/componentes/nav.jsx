"use client";
// components/Navbar.js
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
    <nav className="bg-white bg-opacity text-black p-2 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center p-0">
          <Link href="/">
            <Image src={Logo} alt="" width={80} height={100} />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-black font-extrabold text-xl">
            <li className="font-extrabold ml-4">
              <Link href="/">
                <p className=" hover:text-gray-300 cursor-pointer ">Inicio</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className=" hover:text-gray-300 cursor-pointer">Servicios</p>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <p className=" hover:text-gray-300 cursor-pointer">
                  Iniciar Sesión
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden mt-4 md:mt-0">
          <button
            className="text-black focus:outline-none"
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
          <div className="md:hidden">
            <ul className="mt-4 space-y-2 text-black font-bold text-center">
              <li>
                <Link href="/">
                  <p className=" hover:text-gray-300 cursor-pointer">Inicio</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className=" hover:text-gray-300 cursor-pointer">
                    Servicios
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p className=" hover:text-red-500 cursor-pointer">
                    Iniciar sesion
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
