'use client'

import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'
import MissionList from './MissionList'

type LvProps = {
  levels: number[]
}

const SelectLvTab = ({levels}: LvProps) => {
  const [activeLevel, setActiveLevel] = useState(levels[0])

  return (
    <>
      <Flex
        justify='center'
        align='center'
        direction='row'
        className='z-20 w-full h-[50px] bg-white'
      >
        {levels.map((level, key) => (
          <button onClick={() => setActiveLevel(level)}>
            {activeLevel==level
            ?<Flex
              justify='center'
              align='center'
              className='bg-baseBlue text-white px-5 py-3 mx-1'>
              <h3>Lv.{level}</h3>
            </Flex>
            :<Flex
              justify='center'
              align='center'
              className='bg-gray-100 px-5 py-3 mx-1'>
              <h3>Lv.{level}</h3>
            </Flex>
            }
          </button>
        ))}
      </Flex>
      <MissionList level={activeLevel} />
    </>
  )
}

export default SelectLvTab