// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUs93x1c4-NyA9KggvCLO5qKu3-mwX2ao",
  authDomain: "farmer-ecommerce-files.firebaseapp.com",
  projectId: "farmer-ecommerce-files",
  storageBucket: "farmer-ecommerce-files.appspot.com",
  messagingSenderId: "716099671539",
  appId: "1:716099671539:web:534a047434e79b2e6e6e86",
  measurementId: "G-DV1ZX0H39M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
