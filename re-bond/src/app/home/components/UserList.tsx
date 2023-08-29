import { Flex } from '@/components/elements/box/Flex'
import Header from '@/components/layouts/header/Header'
import React from 'react'

const UserList = () => {
  return (
    <>
      <Header/>
      <Flex
        align='center'
        direction='column'
        className='mb-3'>
          <div className='bg-gray-200 p-5 w-full mb-5 text-center'>
            近くにユーザーがいませんʕ◔ϖ◔ʔ
          </div>
      </Flex>
    </>
  )
}

export default UserList