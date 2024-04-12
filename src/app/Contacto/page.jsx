import React from "react";
import Link from "next/link";
import Formulario from "../componentes/formulario";
import Image from "next/image";
function Contacto() {
  return (
    <div className=" flex justify-center flex-col md:flex-row md:justify-end text-white bg-black ">
      <div className="flex flex-col flex-grow bg-[black] m-4">
        <h1 className="text-3xl justify-center font-bold mb-4">
          Contactame en:
        </h1>
        <div className="flex flex-col space-y-4 ">
          <Link href="https://wa.me/573216166919">
            <p className="flex items-center justify-center space-x-2  cursor-pointer hover:text-2xl ">
              <Image
                src="/whatsapp3.png"
                alt="WhatsApp"
                width={100}
                height={100}
                className="h-14 w-auto"
              />
              <span className="">Whatsapp</span>
            </p>
          </Link>
          <Link href="https://facebook.com/tuusuario">
            <p className="flex items-center space-x-2 justify-center cursor-pointer hover:text-2xl ">
              <Image
                src="/facebook.webp"
                alt="Facebook"
                className="h-14 w-auto"
                width={100}
                height={100}
              />
              <span>Facebook</span>
            </p>
          </Link>
          <Link href="https://tiktok.com/@tucuenta">
            <div className="flex items-center space-x-2 justify-center cursor-pointer hover:text-2xl">
              <Image
                src="/tiktok.webp"
                alt="TikTok"
                className="h-16 w-auto"
                width={100}
                height={100}
              />
              <span>TikTok</span>
            </div>
          </Link>

          <Link href="https://instagram.com/tucuenta">
            <p className="flex items-center space-x-2 justify-center cursor-pointer hover:text-2xl ">
              <Image
                src="/instagram.png"
                alt="Instagram"
                className="h-14 w-auto"
                width={100}
                height={100}
              />
              <span>Instagram</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="bg-[black] flex md:w-1/3 m-6 flex-col">
        <span className=" flex text-center justify-center">
          Enivame un correo Electronico:
        </span>
        <Formulario />
      </div>
    </div>
  );
}

export default Contacto;
