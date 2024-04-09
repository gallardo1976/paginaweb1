// pages/about.js
"use client";
import Tradicional from "../../../public/image01.jpg";
import Image from "next/image";
import Galeria from "../componentes/galeria";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Proyectos = () => {
  const [mostrarParrafo, setMostrarParrafo] = useState(false);
  return (
    <div className="bg-[red] flex">
      <div className="bg-[blue] w-1/2">
        <div className="bg-black m-5">
          <h2
            className="cursor-pointer flex items-center text-xl"
            onClick={() => setMostrarParrafo(!mostrarParrafo)}
          >
            BlackWork
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-4 transition-transform duration-200 ${
                mostrarParrafo ? "rotate-180" : ""
              }`}
            />
          </h2>
          {mostrarParrafo && (
            <Image
              src={Tradicional}
              alt=""
              width={300}
              height={50}
              className="rounded-xl m-6"
            />
          )}
        </div>
      </div>

      <Galeria />
    </div>
  );
};

export default Proyectos;
