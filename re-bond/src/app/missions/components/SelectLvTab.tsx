'use client'

import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'

type LvProps = {
  levels: number[]
  onSelect: (level: number) => void
}
type LevelClasses = {
  [key: number]: string
}

const SelectLvTab = ({levels, onSelect}: LvProps) => {
  const [activeLevel, setActiveLevel] = useState(levels[0])
  
  const selectByLevel:LevelClasses = {
    1: 'bg-level1',
    2: 'bg-level2',
    3: 'bg-level3',
    4: 'bg-level4',
    5: 'bg-level5',
  }

  const selectedLevel = selectByLevel[activeLevel]

  return (
    <>
      <Flex
        justify='center'
        align='center'
        direction='row'
        className='z-20 mt-5 w-full bg-white'
      >
        {levels.map((level) => (
          <button
            key={level}
            className='mx-2'
            onClick={()=>{
              onSelect(level)
              setActiveLevel(level)
            }}>
            {activeLevel==level
            ?<Flex
              justify='center'
              align='center'
              className={selectedLevel+' text-white w-[64px] h-[40px] rounded-t-xl'}>
              <h3>Lv.{level}</h3>
            </Flex>
            :<Flex
              justify='center'
              align='center'
              className='bg-gray-100 w-[64px] h-[40px] rounded-t-xl'>
              <h3>Lv.{level}</h3>
            </Flex>
            }
          </button>
        ))}
      </Flex>
    </>
  )
}

export default SelectLvTab