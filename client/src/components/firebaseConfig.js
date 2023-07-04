// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyATipaXfMVZjtcXT28BW34hZ7BgDsRHXlc",
  authDomain: "ajava-59fb2.firebaseapp.com",
  projectId: "ajava-59fb2",
  storageBucket: "ajava-59fb2.appspot.com",
  messagingSenderId: "25683730881",
  appId: "1:25683730881:web:39fc7f99ec44503e7f4f40",
  measurementId: "G-FSNZLNSSSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);