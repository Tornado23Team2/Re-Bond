import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import InProgress from './components/InProgress'
import FriendList from './components/FriendList'

const page = () => {
  return (
    <>
      <main>
      <Flex
        direction='column'
        className='w-full h-auto p-3'>
        {/* ミッション進行中 */}
        <h2>
          ミッション進行中の友だち
        </h2>
        <InProgress />

        {/* それ以外の友だち一覧 */}
        <h2>
          友だち
        </h2>
        <FriendList />
      </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page