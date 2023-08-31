import React from 'react'
import { Flex } from '@/components/elements/box/Flex'
import EditProfile from './components/EditProfile'
import Footer from '@/components/layouts/footer/Footer'
import Header from '@/components/layouts/header/Header'

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Flex
          align='center'
          direction='column'
          className='w-full h-auto py-5'>
          <h1 className='font-bold text-2xl'>
            SETTINGS
          </h1>

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
      <Footer />
    </>
  )
}

export default page