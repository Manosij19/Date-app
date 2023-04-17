import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdItEMhWLv8k8uNCw8_f8sCh4y_O6GnW8",
  authDomain: "fire-944a0.firebaseapp.com",
  projectId: "fire-944a0",
  storageBucket: "fire-944a0.appspot.com",
  messagingSenderId: "137071625814",
  appId: "1:137071625814:web:b4b37a25bdbfb784871df7",
  measurementId: "G-LCYZSLKSWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth();

export {app,auth};