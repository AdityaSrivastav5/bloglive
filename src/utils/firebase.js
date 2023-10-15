// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-eaa29.firebaseapp.com",
  projectId: "blog-eaa29",
  storageBucket: "blog-eaa29.appspot.com",
  messagingSenderId: "669252119825",
  appId: "1:669252119825:web:e997045377361a8c5670b0",
  measurementId: "G-6T37Z5W9QZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);