import React from 'react'
import { Flex } from '@/components/elements/box/Flex'
import EditAvatar from './components/EditAvatar'
import EditName from './components/EditName'

const page = () => {
  return (
    <main>
      <Flex
        align='center'
        direction='column'
        className='w-full h-auto p-5'>
        <h1 className='font-bold text-2xl'>
          SETTINGS
        </h1>
        {/* アイコン設定 */}
        <EditAvatar />

        {/* 名前変更 */}
        <EditName />

        {/* プロフィール設定 */}

        {/* メールアドレス変更 */}

        {/* パスワード変更 */}

        {/* ログアウト */}

        {/* アカウント削除 */}
      </Flex>
    </main>
  )
}

export default page