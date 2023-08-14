// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =getFirestore(app);