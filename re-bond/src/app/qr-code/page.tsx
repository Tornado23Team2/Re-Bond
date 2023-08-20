import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'

const page = () => {
  return (
    <>
      <main>
      <Flex
        direction='column'
        className='w-full h-auto py-5'>
        <h1 className='font-bold text-2xl'>
          近くのユーザー
        </h1>
        <div className='text-4xl bg-gray-200'>a</div>
      </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page