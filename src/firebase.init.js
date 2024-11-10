// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1iTY7CZIKbZnhlf2RQKelz8Brq6ICBY0",
  authDomain: "email-password-auth-a3d3c.firebaseapp.com",
  projectId: "email-password-auth-a3d3c",
  storageBucket: "email-password-auth-a3d3c.firebasestorage.app",
  messagingSenderId: "984082359651",
  appId: "1:984082359651:web:137c9829040e175bd9df56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);