import React from 'react'
import { Flex } from '@/components/elements/box/Flex'
import EditAvatar from './components/EditAvatar'
import EditName from './components/EditName'
import EditProfile from './components/EditProfile'

const page = () => {
  return (
    <main>
      <Flex
        align='center'
        direction='column'
        className='w-full h-auto py-5'>
        <h1 className='font-bold text-2xl'>
          SETTINGS
        </h1>
        {/* アイコン設定 */}
        <EditAvatar />

        {/* 名前変更 */}
        <EditName />

        {/* プロフィール設定1~5 */}
        <EditProfile />
        <EditProfile />
        <EditProfile />
        <EditProfile />
        <EditProfile />
        
        {/* メールアドレス変更 */}

        {/* パスワード変更 */}

        {/* ログアウト */}
        <button className='w-full p-4 border-b-2 border-gray-300'>
          <Flex
          align='center'
          justify='center'>
            ログアウト
          </Flex>
        </button>
        {/* アカウント削除 */}
        <button className='w-full p-4 border-b-2 border-gray-300'>
          <Flex
          align='center'
          justify='center'
          className='text-red-500'>
            アカウント削除
          </Flex>
        </button>
      </Flex>
    </main>
  )
}

export default page