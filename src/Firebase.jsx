// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzpWjphX19wd83968uWvTXGIOKqXBwBaQ",
  authDomain: "e-clone-26bb4.firebaseapp.com",
  projectId: "e-clone-26bb4",
  storageBucket: "e-clone-26bb4.appspot.com",
  messagingSenderId: "425416564643",
  appId: "1:425416564643:web:ed1ee24c39b860208a8416",
  measurementId: "G-4PX1LX9MH9",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
