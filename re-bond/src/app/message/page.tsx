import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import MessageList from './components/MessageList'

const page = () => {
  return (
    <>
      <main>
        <Flex
          direction='column'
          className='w-full h-auto p-3'>
          <h2>
            ダイレクトメッセージ
          </h2>
          <MessageList />
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page