'use client'

import { Flex } from '@/components/elements/box/Flex'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import React from 'react'

const SelectLvTab = () => {
  const { IsActive } = useCustomRouter()

  const LEVEL:number[] = [1, 2, 3, 4, 5]

  return (
    <>
      <Flex
        justify='center'
        align='center'
        direction='row'
        className='fixed z-20 w-full h-[50px] bg-white'
      >
        {LEVEL.map((level) => (
          <Flex>
            {level}
          </Flex>
        ))}
      </Flex>
    </>
  )
}

export default SelectLvTab