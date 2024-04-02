"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logoo from "../../../public/logo01.png";

const Navbar = () => {
  // Define el estado del menú
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#404040] fixed left-0 top-0 h-screen">
      <div className="flex flex-col justify-between h-full">
        {/* Contenedor del menú */}
        <div
          className={`space-y-2 text-[#F2F2F2] font-extrabold ${
            menuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <div className="mb-10">
            <Link href="/">
              <Image className="" src={Logoo} alt="" width={120} height={120} />
            </Link>
          </div>
          <Link href="/">
            <p className="m-4 mt-10 text-center hover:text-gray-300 cursor-pointer">
              Inicio
            </p>
          </Link>
          <Link href="/about">
            <p className="text-center m-4 hover:text-gray-300 cursor-pointer">
              Acerca
            </p>
          </Link>
          <Link href="/contact">
            <p className="m-4 text-center hover:text-gray-300 cursor-pointer">
              Contacto
            </p>
          </Link>

          <div className="text-[#F2F2F2] font-extrabold">
            <Link href="/login">
              <p className="text-center hover:text-gray-300 cursor-pointer">
                Iniciar Sesión
              </p>
            </Link>
          </div>
        </div>

        {/* Botón de menú para pantallas pequeñas */}
        <div className="sm:hidden ">
          <button
            onClick={toggleMenu}
            className="block text-white w-auto mx-auto"
          >
            {menuOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
