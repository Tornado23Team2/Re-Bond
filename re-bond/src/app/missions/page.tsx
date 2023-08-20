import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import SelectLvTab from './components/SelectLvTab'

const page = () => {
  return (
    <>
      <main>
        <Flex
          direction='column'
          className='w-full h-auto p-3'>
          <h2>
            ミッション一覧
          </h2>
          
          {/* レベル別のタブ切り替え */}
          <SelectLvTab />
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page