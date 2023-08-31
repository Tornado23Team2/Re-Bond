"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import { Flex } from "@/components/elements/box/Flex";
import Link from "next/link";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged,applyActionCode } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import app from "../../../firebase/firebase";
import { Navigate } from "react-router-dom";
type Users = {
  email: string;
  password: string;
}


const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("ユーザーがログインしました: ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("エラーコード: ", errorCode);
      console.error("エラーメッセージ: ", errorMessage);
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value);
    };
    
  return (
    <>
    <main
    className="p-0 m-0">
      <Flex 
        justify="center"
        align="center"
        direction="column" 
        className="w-full h-screen">
        <Head>
          <title>login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
          src={"/header/headerLogo.svg"}
          width={258}
          height={97}
          alt="re:bond"
          className="mb-24"
        />
        <form
        className="w-4/5"
        >
          <Flex
          align="center"
          justify="center"
          direction="column">
          <input 
            type="email"
            id="email"
            placeholder="メールアドレス"
            className="bg-form p-3 w-full mb-4"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeEmail(event);
            }
          }
            />
            <input 
            type="password"
            id="password"
            placeholder="パスワード"
            className="bg-form p-3 w-full mb-4"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChangePassword(event);
            }
            }
            />
            <Link
            className="w-full text-right mb-6"
            href={"/Reregistration"}
            >パスワードを忘れた場合
            </Link>
            <button 
              className="w-full bg-baseBlue text-white p-3 rounded-full active:bg-blue-800 "
            //  onClick={handleLogin}
            >
              ログイン  
            </button>
            <Flex
              align="center"
              justify="center"
              className="w-full">
            <span className="Border"/>
            <p className="px-3 py-6 ">または</p>
            <span className="Border"/>
            </Flex>
            <Link
              href={"/Registration"} 
              className="w-full bg-baseBlue text-white p-3 rounded-full text-center active:bg-blue-800">
              新規登録  
            </Link>
          </Flex>
        </form>
      </Flex>
    </main>
    </>
  );
};
export default page;
