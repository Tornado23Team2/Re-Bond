import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
interface Inputs {
  email: string;
  password: string;
}


const RegistInput = () => {
  
  return (
    <>
      <input 
        type="email"
        id="email"
        placeholder="メールアドレス"
        className="bg-form p-3 w-full mb-4"
      />
      <input 
        type="password"
        id="password"
        placeholder="パスワード"
        className="bg-form p-3 w-full mb-8"
      />
    </>
  )
}

//const auth = getAuth();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
export default RegistInput
