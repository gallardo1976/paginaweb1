"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import imagen01 from "../../public/image01.jpg";
import imagen02 from "../../public/imagen02.jpg";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <main className="  flex flex-grow  flex-col bg-[black]">
      <div className="flex  flex-col md:flex-row  mt-8   text-[#D9D9D9]">
        <div
          id="2"
          className="flex flex-col md:w-1/2  md:mr-4  items-center justify-center "
        >
          <div className=" m-6  ">
            <h1 className="text-4xl font-punk tracking-wide mb-4 text-center sm:text-5xl font-extrabold  mt-0 ">
              Evolution Tattoo
            </h1>
            <p className="   text-center mb-6 text-xl md:text-xl  ">
              ¡Bienvenido al estudio donde tus ideas toman forma en tinta y
              creatividad!
            </p>
          </div>
          <div class="flex  justify-center mb-4">
            <Link href="/Contacto">
              <button class="border-2 border-dynamic text-dynamic px-4 py-2 rounded mr-2 hover:bg-white hover:font-extrabold hover:text-black hover:border-dynamic">
                Contacta conmigo
              </button>
            </Link>
            <Link href="/trabajos">
              <button class="border-2 border-dynamic text-dynamic px-4 py-2 rounded hover:bg-white hover:text-black hover:border-dynamic hover:font-extrabold">
                Ver trabajos
              </button>
            </Link>
          </div>
        </div>

        <div className="flex   justify-center    md:w-1/2 p-1 m-2  md:items-center md:justify-center  ">
          <Image
            src={hovered ? imagen01 : imagen02}
            alt=""
            width={260}
            height={400}
            className={`rounded-xl items-center ${
              hovered
                ? "transition duration-500 ease-in-out transform hover:scale-110"
                : ""
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
