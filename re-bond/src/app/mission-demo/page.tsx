import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import Mission from './components/Mission'

const page = () => {
  return (
    <>
      <main>
        <Flex
          direction='column'
          className='w-full h-auto p-3'>
          <h2>
            ミッションDEMO
          </h2>
          <Mission />
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page