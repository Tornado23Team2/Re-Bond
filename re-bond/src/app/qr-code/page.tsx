import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'

const page = () => {
  return (
    <>
      <main>
        <Flex
          direction='column'
          className='w-full h-auto p-3'>
          <h2>
            QRコード
          </h2>
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page