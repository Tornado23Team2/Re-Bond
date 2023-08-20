import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import UserList from './components/UserList'

const page = () => {
  return (
    <>
      <main>
        <Flex
          direction='column'
          className='w-full h-auto p-3'>
          <h2>
            近くのユーザー
          </h2>
          <UserList />
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page