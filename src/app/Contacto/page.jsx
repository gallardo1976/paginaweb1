import React from "react";
import Link from "next/link";
import Formulario from "../componentes/formulario";
import Image from "next/image";
function Contacto() {
  return (
    <div className=" flex justify-center flex-col md:flex-row md:justify-end bg-[blue] m-4 font-jersey">
      <div className="flex flex-col flex-grow bg-[black] m-4">
        <h1 className="text-3xl font-bold mb-4">Contactame en:</h1>
        <div className="flex flex-col space-y-4">
          <Link href="https://wa.me/573216166919">
            <p className="flex items-center space-x-2  cursor-pointer ">
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
              <span>Whatsapp</span>
            </p>
          </Link>
          <Link href="https://facebook.com/tuusuario">
            <p className="flex items-center space-x-2  cursor-pointer hover:underline">
              <Image
                src="/facebook_logo.png"
                alt="Facebook"
                className="h-6 w-6"
                width={50}
                height={50}
              />
              <span>Facebook</span>
            </p>
          </Link>
          <Link href="https://tiktok.com/@tucuenta">
            <p className="flex items-center space-x-2  cursor-pointer hover:underline">
              <Image
                src="/tiktok.jpg"
                alt="TikTok"
                className="h-6 w-6"
                width={50}
                height={50}
              />
              <span>TikTok</span>
            </p>
          </Link>
          <Link href="https://instagram.com/tucuenta">
            <p className="flex items-center space-x-2 cursor-pointer hover:underline">
              <Image
                src="/instagram_logo.png"
                alt="Instagram"
                className="h-32 w-auto"
                width={100}
                height={100}
              />
              <span>Instagram</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="bg-[black] flex md:w-1/3 m-6">
        <Formulario />
      </div>
    </div>
  );
}

export default Contacto;
