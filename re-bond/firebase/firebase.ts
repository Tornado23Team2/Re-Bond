"use client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_U0PyhDv2izgtPRDkLzNHlUx0s_WKhww",
  authDomain: "re-bond-3f096.firebaseapp.com",
  databaseURL: "https://re-bond-3f096-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "re-bond-3f096",
  storageBucket: "re-bond-3f096.appspot.com",
  messagingSenderId: "80112488601",
  appId: "1:80112488601:web:3d95f037a98eb13a036808",
  measurementId: "G-4PGPN4727C"
};
// Initialize Firebase (Firebaseの初期化)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, "mission_table");
const auth = getAuth(app);

export default app;
export { db, collectionRef, auth };
