import React from 'react'
import { Flex } from "@/components/elements/box/Flex"
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-0 m-0 '>
      <Flex 
        justify="center"
        align="center"
        direction="column" 
        className="w-full h-screen">
          <Image
          src={"/header/headerLogo.svg"}
          width={258}
          height={97}
          alt="re:bond"
          className="mb-16"
        />
         <Link
            href={"/login"} 
            className="w-1/2 bg-baseBlue text-white p-3 rounded-md text-center  active:bg-blue-800 mb-4">
            ログイン  
          </Link>
         <Link
            href={"/Registration"} 
            className="w-1/2 bg-indigo-600 bg-baseBlue text-white p-3 rounded-md text-center active:bg-blue-800 mb-4">
            新規登録  
          </Link>
          <Link
            href={"/home"} 
            className="w-1/2 bg-indigo-600 bg-baseBlue text-white p-3 rounded-md text-center active:bg-blue-800 mb-4">
            ホーム
          </Link>
          <Link
            href={"/missions"} 
            className="w-1/2 bg-indigo-600 bg-baseBlue text-white p-3 rounded-md text-center active:bg-blue-800 ">
            ミッション
          </Link>
      </Flex>
    </main>
  );
}
