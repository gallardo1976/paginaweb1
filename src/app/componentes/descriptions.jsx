// pages/index.js

import React, { useState, useEffect } from "react";
import db from "../../../firebase.config"; // Importa la instancia de Firestore

export default function Descripción() {
  const [description, setDescription] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    // Obtén la descripción de texto desde Firestore (asumiendo que tienes una colección llamada 'descriptions')
    const fetchDescription = async () => {
      try {
        const doc = await db
          .collection("descriptions")
          .doc("mi-descripcion")
          .get();
        if (doc.exists) {
          setDescription(doc.data().text);
        } else {
          console.log("¡No existe ese documento!");
        }
      } catch (error) {
        console.error("Error al obtener la descripción:", error);
      }
    };

    fetchDescription();
  }, []);

  const handleInputChange = (event) => {
    setNewDescription(event.target.value);
  };

  const updateDescription = async () => {
    try {
      // Actualiza la descripción en Firestore
      await db.collection("descriptions").doc("mi-descripcion").update({
        text: newDescription,
      });
      setDescription(newDescription);
      console.log("¡Descripción actualizada correctamente!");
    } catch (error) {
      console.error("Error al actualizar la descripción:", error);
    }
  };

  return (
    <div>
      <h1>Evolution Tattoo</h1>
      <p>{description}</p>
      <input
        type="text"
        value={newDescription}
        onChange={handleInputChange}
        placeholder="Ingresa la nueva descripción"
      />
      <button onClick={updateDescription}>Actualizar Descripción</button>
    </div>
  );
}
