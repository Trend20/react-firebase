// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTaYCMLueC8eHKGxWaW_ALTPE43QLirc0",
  authDomain: "react-firebase-9bfd2.firebaseapp.com",
  projectId: "react-firebase-9bfd2",
  storageBucket: "react-firebase-9bfd2.appspot.com",
  messagingSenderId: "153213616575",
  appId: "1:153213616575:web:bda7d9fdf1760e13bbe10a",
  measurementId: "G-P3Q9QX1J7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
