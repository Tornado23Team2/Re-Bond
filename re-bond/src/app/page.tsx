import React from 'react'
import { Flex } from "@/components/elements/box/Flex"
import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-0'>
      <Flex
        justify="center"
        className="w-full h-full items-center text-3xl font-bold underline">
        <Link href='/home'>
          Hello world!
        </Link>
      </Flex>
    </main>
  )
}
