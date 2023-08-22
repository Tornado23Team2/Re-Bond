'use client'
import React from 'react'
import { initializeApp } from "firebase/app";
import { Flex } from "@/components/elements/box/Flex"
import { collection,query,where,getFirestore,getDocs } from "firebase/firestore";


export default function Mission() {
  const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: "re-bond-3f096",
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };
const app = initializeApp(firebaseConfig);


const db =getFirestore();
const collectionRef = collection(db,"mission_table");

const level1 = query(collectionRef,where('level','==',1));
const level2 = query(collectionRef,where('level','==',2));
const level3 = query(collectionRef,where('level','==',3));
const level4 = query(collectionRef,where('level','==',4));
const level5 = query(collectionRef,where('level','==',5));
  const clicklevel1 = async () => {
    try {
      const querySnapshot = await getDocs(level1);
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      const randomIndexes: number[] = [];
      while (randomIndexes.length < 5) {
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
          console.log(dataArray[randomIndex]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const clicklevel2 = async () => {
    try {
      const querySnapshot = await getDocs(level2);
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      const randomIndexes: number[] = [];
      while (randomIndexes.length < 5) {
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
          console.log(dataArray[randomIndex]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const clicklevel3 = async () => {
    try {
      const querySnapshot = await getDocs(level3);
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      const randomIndexes: number[] = [];
      while (randomIndexes.length < 5) {
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
          console.log(dataArray[randomIndex]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const clicklevel4 = async () => {
    try {
      const querySnapshot = await getDocs(level4);
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      const randomIndexes: number[] = [];
      while (randomIndexes.length < 5) {
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
          console.log(dataArray[randomIndex]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const clicklevel5 = async () => {
    try {
      const querySnapshot = await getDocs(level5);
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      const randomIndexes: number[] = [];
      while (randomIndexes.length < 5) {
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
          console.log(dataArray[randomIndex]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main>
      <Flex
        align='center'
        direction='column'
        className='w-full h-auto py-5'>

        {/* ミッション1 */}
        <button className='w-full p-4 border-b-2 border-gray-300'
         onClick={clicklevel1}
        >

          <Flex
          align='center'
          justify='center'>
            ミッション1
          </Flex>

        </button>
        {/* ミッション2 */}
        <button className='w-full p-4 border-b-2 border-gray-300'
         onClick={clicklevel2}
        >
          <Flex
          align='center'
          justify='center'>
            ミッション2
          </Flex>
        </button>
        {/* ミッション3 */}
        <button className='w-full p-4 border-b-2 border-gray-300'
         onClick={clicklevel3}
        >
          <Flex
          align='center'
          justify='center'>
            ミッション3
          </Flex>
        </button>
        {/* ミッション4 */}
        <button className='w-full p-4 border-b-2 border-gray-300'
         onClick={clicklevel4}
        >
          <Flex
          align='center'
          justify='center'>
            ミッション4
          </Flex>
        </button>
        {/* ミッション5 */}
        <button className='w-full p-4 border-b-2 border-gray-300'
         onClick={clicklevel5}
        >
          <Flex
          align='center'
          justify='center'>
            ミッション5
          </Flex>
        </button>
      </Flex>
    </main>
  )
}