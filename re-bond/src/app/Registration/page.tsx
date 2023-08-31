import { Flex } from "@/components/elements/box/Flex";
//import { useForm, SubmitHandler } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
//import { ErrorMessage } from '@hookform/error-message';
import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <>
      <main>
        <Flex align="center" direction="column" className="w-full h-auto py-5">
          <h1>新規登録</h1>
          <br></br>
          {/* メールアドレス*/}
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="メールアドレス"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500   border-2 w-1/2 "
            />
          </label>
          <br />
          <label htmlFor="">
            <input
              type="text"
              id="password"
              defaultValue={"パスワード"}
              placeholder="パスワード"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500   border-2 w-1/2"
            />
          </label>

          <button
            type="button"
            className="bg-gray-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-1/2 m-4 items-center"
          >
            次へ
          </button>
          <br></br>
        </Flex>
      </main>
    </>
  );
};

export default page;
