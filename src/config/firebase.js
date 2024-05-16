// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxklM9ToPaX2jgY8PIkn9LBk52AF-ACLw",
  authDomain: "movie-management-bc673.firebaseapp.com",
  projectId: "movie-management-bc673",
  storageBucket: "movie-management-bc673.appspot.com",
  messagingSenderId: "968555495855",
  appId: "1:968555495855:web:76d0e700bf06a58898af5a",
  measurementId: "G-Z771RL38ZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
