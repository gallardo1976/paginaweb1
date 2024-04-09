import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "../../../firebase.config";

const crud = () => {
  return <div className="bg-[red]">hola</div>;
};

export default crud;
