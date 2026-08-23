// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm_KdHRlHV_olJ2jvEE_OPr6Azczwzxss",
  authDomain: "feed-de-comentarios.firebaseapp.com",
  projectId: "feed-de-comentarios",
  storageBucket: "feed-de-comentarios.firebasestorage.app",
  messagingSenderId: "588450573994",
  appId: "1:588450573994:web:1cff996c336ef004a22ad3",
  measurementId: "G-8J0CR3T9V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);