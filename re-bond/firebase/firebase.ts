'use client'
import { initializeApp } from "firebase/app"
import { collection,getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: "re-bond-3f096",
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
}

const app = initializeApp(firebaseConfig)
const db =getFirestore()
const collectionRef = collection(db,"mission_table")

export default app
export {db, collectionRef}