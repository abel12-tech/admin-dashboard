// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnEq160JSzDQVWBIEx1wIFpISC6yyzg98",
  authDomain: "ecommerce-d8dbb.firebaseapp.com",
  projectId: "ecommerce-d8dbb",
  storageBucket: "ecommerce-d8dbb.appspot.com",
  messagingSenderId: "149182718584",
  appId: "1:149182718584:web:b36badcf6c6cfae9c9c38d",
  measurementId: "G-KVEN7S9F4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);