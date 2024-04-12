import React from "react";
import Link from "next/link";
import Formulario from "../componentes/formulario";
import Image from "next/image";
function Contacto() {
  return (
    <div className=" flex  flex-col  md:flex-row  text-white  ">
      <div className="flex flex-col items-center  justify-center p-4">
        <h1 className="text-3xl justify-center font-bold mb-8">
          Contactame en:
        </h1>
        <div className="flex bg-black  space-y-8 md:space-y-0 flex-col md:flex-row  md:space-x-10 ">
          <Link href="https://wa.me/573216166919">
            <div className="flex items-center space-x-2  cursor-pointer hover:text-2xl ">
              <Image
                src="/whatsapp4.png"
                alt="WhatsApp"
                width={100}
                height={100}
                className="h-14 w-auto"
              />
              <span className="">Whatsapp</span>
            </div>
          </Link>
          <Link href="https://facebook.com/tuusuario">
            <div className="flex items-center space-x-2   cursor-pointer hover:text-2xl ">
              <Image
                src="/face.png"
                alt="Facebook"
                className="h-14 w-auto rounded-full"
                width={500}
                height={500}
              />
              <span>Facebook</span>
            </div>
          </Link>
          <Link href="https://tiktok.com/@tucuenta">
            <div className="flex items-center space-x-2    cursor-pointer hover:text-2xl">
              <Image
                src="/tiktok4.webp"
                alt="TikTok"
                className="h-14 w-auto  rounded-full"
                width={100}
                height={100}
              />
              <span>TikTok</span>
            </div>
          </Link>

          {/* <Link href="https://instagram.com/tucuenta">
            <div className="flex items-center space-x-2  cursor-pointer hover:text-2xl ">
              <Image
                src="/instagram.webp"
                alt="Instagram"
                className="h-14 w-auto rounded-full"
                width={100}
                height={100}
              />
              <span>Instagram</span>
            </div>
          </Link> */}
        </div>
      </div>

      <div className=" flex md:w-1/2 m-5 flex-col">
        <span className=" flex text-center justify-center">
          Enivame un correo Electronico:
        </span>
        <Formulario />
      </div>
    </div>
  );
}

export default Contacto;
