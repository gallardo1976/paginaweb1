"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
// Importa un indicador de carga de Material-UI u otro que prefieras
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UploadImage = () => {
  const [images, setImages] = useState([
    { id: 1, imageURL: "", title: "", description: "" },
    { id: 2, imageURL: "", title: "", description: "" },
    { id: 3, imageURL: "", title: "", description: "" },
    { id: 4, imageURL: "", title: "", description: "" },
  ]);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado de carga
  const firestore = getFirestore();

  useEffect(() => {
    const loadImageURLsFromFirestore = async () => {
      try {
        const promises = images.map(async (image) => {
          const docRef = doc(firestore, "images", `imageURL_${image.id}`);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            return {
              ...data,
              id: image.id,
              imageURL: data.url,
              title: data.title,
              description: data.description,
            };
          } else {
            return { id: image.id, imageURL: "", title: "", description: "" };
          }
        });
        const loadedImages = await Promise.all(promises);
        setImages(loadedImages);
        setIsLoading(false); // Indica que la carga ha finalizado
      } catch (e) {
        console.error("Error getting documents: ", e);
      }
    };

    loadImageURLsFromFirestore();

    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
      setUser(user);

      if (user) {
        try {
          const docRef = doc(firestore, "administradores", "1123318628");
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const adminEmail = docSnap.data().Email;
            setIsAdmin(user.email === adminEmail);
          } else {
            console.log("El documento de administrador no existe.");
            setIsAdmin(false);
          }
        } catch (error) {
          console.error(
            "Error al obtener el correo electrónico del administrador:",
            error
          );
          setIsAdmin(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleImageChange = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;

    setImages((prevImages) =>
      prevImages.map((image) => (image.id === id ? { ...image, file } : image))
    );
  };

  const handleUpload = async (id) => {
    const imageToUpdate = images.find((image) => image.id === id);
    if (!imageToUpdate || !imageToUpdate.file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `images/${imageToUpdate.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageToUpdate.file);

    uploadTask.on(
      "state_changed",
      () => {}, // No hacemos nada con el progreso aquí
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          try {
            const docRef = doc(firestore, "images", `imageURL_${id}`);
            await setDoc(docRef, {
              url: downloadURL,
              title: imageToUpdate.title,
              description: imageToUpdate.description,
            });
            console.log("Document updated with ID: ", docRef.id);
          } catch (e) {
            console.error("Error updating document: ", e);
          }
          setImages((prevImages) =>
            prevImages.map((image) =>
              image.id === id
                ? { ...image, imageURL: downloadURL, file: null }
                : image
            )
          );
        });
      }
    );
  };

  const handleDeleteImage = async (id) => {
    try {
      const docRef = doc(firestore, "images", `imageURL_${id}`);
      await deleteDoc(docRef);
      setImages((prevImages) =>
        prevImages.map((image) =>
          image.id === id ? { ...image, imageURL: "" } : image
        )
      );
      console.log("Document deleted");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleTitleChange = (e, id) => {
    const newTitle = e.target.value;
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, title: newTitle } : image
      )
    );
  };

  const handleDescriptionChange = (e, id) => {
    const newDescription = e.target.value;
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, description: newDescription } : image
      )
    );
  };

  const handleUpdateDescription = async (id) => {
    const imageToUpdate = images.find((image) => image.id === id);
    if (!imageToUpdate) return;

    try {
      const docRef = doc(firestore, "images", `imageURL_${id}`);
      await updateDoc(docRef, {
        title: imageToUpdate.title,
        description: imageToUpdate.description,
      });
      console.log("Document updated");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className="grid mt-6 grid-cols-1-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-4">
      {isLoading ? ( // Renderiza el indicador de carga mientras isLoading es true
        <div className="flex justify-center items-center h-full">
          <CircularProgress />
        </div>
      ) : (
        images.map((image) => (
          <div
            key={image.id}
            className="max-w-sm rounded overflow-hidden shadow-lg h-full"
          >
            <Image
              className="w-full h-80 object-cover"
              width={500}
              height={500}
              src={image.imageURL}
              alt="Imagen subida"
            />

            <div>
              {isAdmin ? (
                <>
                  <input
                    type="text"
                    value={image.title}
                    onChange={(e) => handleTitleChange(e, image.id)}
                    className="mt-2 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Title"
                  />
                  <textarea
                    value={image.description}
                    onChange={(e) => handleDescriptionChange(e, image.id)}
                    className="mt-2 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="4"
                    placeholder="Description"
                  />
                </>
              ) : (
                <>
                  <h3 className="text-center  mt-2">{image.title}</h3>
                  <p className="text-center  text-gray-500 border-b mb-4 ">
                    {image.description}
                  </p>
                </>
              )}
            </div>
            <div
              id={image.id === 2 && !isAdmin ? "hidden" : ""}
              className="px-6 py-4  m-5"
            >
              {user && isAdmin && (
                <div>
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e, image.id)}
                    className="mt-1 block w-full p-1 border border-gray-300 rounded-md bg-black text-sm  text-gray-700 hover:bg-gray focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />

                  <button
                    onClick={() => handleUpload(image.id)}
                    disabled={!image.file}
                    className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Subir imagen
                  </button>
                  <button
                    onClick={() => handleDeleteImage(image.id)}
                    disabled={!image.imageURL}
                    className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-xs  rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Eliminar imagen
                  </button>
                  <button
                    onClick={() => handleUpdateDescription(image.id)}
                    className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Actualizar descripción
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UploadImage;
