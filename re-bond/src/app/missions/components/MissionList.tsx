import { Flex } from '@/components/elements/box/Flex'
import React from 'react'
import MissionCard from './MissionCard'

type LevelProps = {
  level:number
}

const MissionList = ({level}: LevelProps) => {
  return (
    <Flex
      align='center'
      justify='center'
      direction='column'
      className='w-full mt-[1px] px-12 border-t-2 border-baseBlue'>
      <MissionCard />
    </Flex>
  )
}

export default MissionList