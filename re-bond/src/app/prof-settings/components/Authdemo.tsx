"use client";
import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,getAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHN4XqggyDhYsfdCAXfKVqLWbxggLjbY4",
  authDomain: "re-bond.firebaseapp.com",
  projectId: "re-bond",
  storageBucket: "re-bond.appspot.com",
  messagingSenderId: "827902450485",
  appId: "1:827902450485:web:45aa1f81cb91a741a20a7c",
  measurementId: "G-WYWYFND1GF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const loginWithEmail = async (email: string, password: string) => {
    try {
        await app.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        alert(error)
    }
}

export const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
        await firebase.auth().signInWithPopup(provider)
    } catch (error) {
        alert(error)
    }
}

export const signupWithEmail = async (email: string, password: string) => {
    try {
        await app.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        alert(error)
    }
}

export const logout = () => {
    app.auth().signOut()
}

export const FirebaseProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setUser(user)
            setPending(false)
        })
    }, [])

    if (pending) {
        return <div className='loading'>ローディング中...</div>
    }

    return (
        <FirebaseContext.Provider
            value={{
                user,
            }}
        >
            {children}
        </FirebaseContext.Provider'>
    )
}


const Auth = () => {
  const {user} =useContext(FirebaseContext);
  return (
    <>
      <main>
      <Flex
        direction='column'
        className='w-full h-auto p-3'>
        {/* ミッション進行中 */}
        <h1>
          Home(要ログイン)
        </h1>

        {/* それ以外の友だち一覧 */}
        <p>{user?.email}でログインしています</p>
        <button onClick ={logout}>ログアウト</button>
      </Flex>
      </main>
      <Footer />
    </>
  )
}

export default Auth