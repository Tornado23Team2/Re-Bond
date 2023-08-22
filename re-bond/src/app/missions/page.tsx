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
          className='w-full h-auto'>
          
          {/* レベル別のタブ切り替え */}
          <SelectLvTab levels={[1,2,3,4,5]} />
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page