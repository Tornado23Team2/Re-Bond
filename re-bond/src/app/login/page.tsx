import { signInAnonymously, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Flex } from "@/components/elements/box/Flex";
import { useForm, SubmitHandler } from "react-hook-form";
import auth from "../../../firebase/firebase";

interface Inputs {
  email: string;
  password: string;
}

const page = () => {
  // useEffect(() => {
  //   const authStateChanged = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  //   return () => {
  //     authStateChanged();
  //   };
  // }, []);

  // const [login, setLogin] = useState(false);
  // const { signIn, signUp } = auth();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
  //   if (login) {
  //     await signIn(email, password);
  //   } else {
  //     await signUp(email, password);
  //   }
  // };

  return (
    <div
      className="relative flex h-screen w-full flex-col bg-black
      md:items-center md:justify-center md:bg-transparent"
    >
      <Head>
        <title>login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={"/header/headerLogo.svg"}
        width={258}
        height={97}
        alt="re:bond"
        className="mt-4 m-8"
      />
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6
          md:mt-0 md:max-w-md md:px-14"
      >
        <h1>Sign In</h1>
        <div className="space-y-4">
          <label htmlFor="email" className="inline-block w-full">
            <input
              // {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              id="email"
              className="input"
            />
            {/* エラーメッセージ */}
            {/* {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email.
              </p>
            )} */}
          </label>
          <label htmlFor="password" className="inline-block w-full">
            <input
              // {...register("password", { required: true })}
              type="password"
              placeholder="PassWord"
              id="password"
              className="input"
            />
            {/* エラーメッセージ */}
            {/* {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )} */}
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          // onClick={() => setLogin(true)}
        >
          ログイン
        </button>

        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            type="submit"
            className="text-white hover:underline"
            // onClick={() => setLogin(false)}
          >
            Sign up now!
          </button>
        </div>
      </form>
    </div>
  );
};

// export default login
//             <input
//               type="text"
//               id="password"
//               placeholder="パスワード"
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 m-12 text-2xl border-2"
//             />
//           </label>
//         </Flex>
//         <Flex className="flex items-right">
//           <h3>パスワードを忘れた場合</h3>
//         </Flex>
//       </main>
//     </>
//   );
// };

export default page;
