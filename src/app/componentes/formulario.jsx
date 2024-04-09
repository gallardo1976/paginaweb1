// components/Formulario.js
"use client";
import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar formData a tu servidor o realizar cualquier otra acción
    console.log(formData);
  };

  return (
    <form
      className=" flex flex-col max-w-md mx-auto mt-8  text-[#D9D9D9] font-jersey"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="shadow appearance-none border bg-black rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          id="nombre"
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="correo">
          Correo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 bg-black  leading-tight focus:outline-none focus:shadow-outline"
          id="correo"
          type="email"
          placeholder="Correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2" htmlFor="telefono">
          Teléfono
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 bg-black   leading-tight focus:outline-none focus:shadow-outline"
          id="telefono"
          type="tel"
          placeholder="Teléfono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block  text-sm font-bold mb-2" htmlFor="descripcion">
          Descripción
        </label>
        <textarea
          className="shadow appearance-none border bg-black  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="descripcion"
          placeholder="Descripción"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex items-center justify-center ">
        <button
          className=" bg-gray-500 text-black hover:text-2xl hover:bg-white hover:text-black border  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
