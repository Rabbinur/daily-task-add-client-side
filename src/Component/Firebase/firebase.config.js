// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKSTgsJH0EobJ0rLUpXFiGKela771PnVQ",
  authDomain: "tasks-add.firebaseapp.com",
  projectId: "tasks-add",
  storageBucket: "tasks-add.appspot.com",
  messagingSenderId: "1026183842925",
  appId: "1:1026183842925:web:cc97dd3a478265c9e60364",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
