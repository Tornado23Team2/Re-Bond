import { Flex } from '@/components/elements/box/Flex'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
      <Flex
        justify='center'
        align='center'
        className='fixed z-30 w-full h-[90px] border-b-2 border-indigo-600'>
        <Image
          src={'/header/headerLogo.svg'}
          width={130}
          height={53}
          alt='re:bond'
          className='mt-4'
        />
      </Flex>
    </>
  )
}

export default Header