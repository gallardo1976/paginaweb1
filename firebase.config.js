// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxqJh482KwZ9HFG1e0eGz6v9dL9CGKhQw",
  authDomain: "evolutiontattoo-93075.firebaseapp.com",
  projectId: "evolutiontattoo-93075",
  storageBucket: "evolutiontattoo-93075.appspot.com",
  messagingSenderId: "807927480403",
  appId: "1:807927480403:web:43f11d3f41f5e032e686a6",
  measurementId: "G-7G1XXDWZ8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
