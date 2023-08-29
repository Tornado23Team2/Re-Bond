import { Flex } from "@/components/elements/box/Flex";
import login_button from "./components/login_button";
//import { useForm, SubmitHandler } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
//import { ErrorMessage } from '@hookform/error-message';
import Image from "next/image";
import React from "react";

type Inputs = {
  email: string;
  password: string;
};
//export default function Signin() {
//const navigate = useNavigate();
//errorMsg という名前のstate関数を宣言、初期値 null をセット
//const [errorMsg, setErrorMsg] = useState("");

// const {
//   register,
//   handleSubmit,
//   reset,
//   formState: { errors },
// } = useForm<Inputs>({
//   mode: "onChange",
// });
//ログインボタンを押した際の処理
// const onSubmit: SubmitHandler<Inputs> = (data) =>{
//     console.log(data);
//     if (data.username === "email" && data.password === "password"){  //仮email・パスワード
//         loginSuccess();
//     }else{
//         loginErrorMsg();
//     }
//     reset();
// };
//ログインに成功した場合、次のページへ遷移
// const loginSuccess = () => {
//     navigate("/Top/page");
// }
//ログインに失敗した場合のエラーメッセージをセット
//     const loginErrorMsg = () => {
//         //setErrorMsg()でerrorMsgの値を更新
//         setErrorMsg("ユーザーIDもしくはパスワードが間違っています。");

// const clearForm = () => {
//   reset();
// };
const page = () => {
  return (
    <>
      <main>
        <Flex align="center" direction="column" className="w-full h-auto py-5">
          <Image
            src={"/header/headerLogo.svg"}
            width={258}
            height={97}
            alt="re:bond"
            className="mt-4 m-8"
          />
          <br></br>
          {/* メールアドレス*/}
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="メールアドレス"
              // {...register("e-mail", {
              //   required: "メールアドレスを入力してください。",
              //   maxLength: {
              //     value: 20,
              //     message: "20文字以内で入力してください",
              //   },
              // })}
              className=" bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500   border-2 w-full "
            />
          </label>
          <br />
          <label htmlFor="">
            <input
              type="text"
              id="password"
              placeholder="パスワード"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500   border-2 w-1/2"
            />
          </label>

          <h3 className="text-right">パスワードを忘れた場合</h3>
          <button
            type="button"
            className="bg-gray-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-1/2 m-4 items-center"
          >
            ログイン
          </button>
          <br></br>
          <button
            type="button"
            className="bg-gray-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-1/2 m-4"
          >
            新規登録
          </button>
        </Flex>
      </main>
    </>
  );
};

export default page;
