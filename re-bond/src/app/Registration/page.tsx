"use client";
import Head from "next/head";
import { Flex } from "@/components/elements/box/Flex";
import Link from "next/link";
import RadioButton from "./components/RadioButton";
import  RegistraInput from "@/app/Registration/components/RegistInput"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { FirebaseError } from '@firebase/util'
type Inputs = {
  email: string;
  password: string;
}

const page = ({email,password}:Inputs) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in ユーザー情報格納
      const user = userCredential.user;
      console.log("ユーザーが作成されました: ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("エラーコード: ", errorCode);
      console.error("エラーメッセージ: ", errorMessage);
      // ..
    });
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
        <p
          className="text-4xl mb-8">
          新規登録
        </p>
        <form
        className="w-4/5">
       <input 
          type="name"
          id="name"
          placeholder="名前"
          className="bg-form p-3 w-full mb-4"
        />
          <RegistraInput />
          <Flex
          align="center"
          justify="center"
          direction="column">
            <button 
              className="w-full bg-baseBlue text-white p-3 rounded-full mb-4">
              次へ 
            </button>
            <Link
              className="w-full text-center"
              href={"/login"}
              >ログインはこちら
            </Link>
          </Flex>
        </form>
      </Flex>
    </main>
    </>
  );
};

export default page;
