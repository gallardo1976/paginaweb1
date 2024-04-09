// Profile.js
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseApp from "../../../firebase.config";
import Lout from "../../../public/lout.png";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Guarda la información del usuario en el estado
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      const auth = getAuth(firebaseApp);
      await signOut(auth);
      setUser(null); // Borra la información del usuario del estado
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="font-sans text-xs  flex  items-center">
      {user && (
        <div className="bg-black  flex items-center">
          <span>Usuario: {user.email}</span>
          <button onClick={handleSignOut}>
            <Image
              src={Lout}
              alt="lout"
              width={100}
              height={100}
              className="h-10 w-auto"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
