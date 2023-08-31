import React from 'react'
import { Flex } from "@/components/elements/box/Flex"
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-0 m-0 '>
    <Link href={"/home"}>
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
          <p>Tap to Start</p>
      </Flex>
      </Link>
    </main>
  );
}
