import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'
import { Missions } from '../types/missions'

type MissionProps = {
  mission: Missions
  onSelectMission: () => void
}

const MissionCard = ({mission, onSelectMission }:MissionProps) => {

  const ActivateMission = () => {
      onSelectMission()
      console.log('MissionActivated')
  }

  return (
    <Flex
      align='center'
      justify='space-between'
      direction='row'
      className='bg-gray-200 px-5 py-3 w-full mt-3'
    >
      <h2>{mission.name}</h2>
      
        <button
          onClick={ActivateMission}
          className='bg-baseBlue w-[70px] py-2 text-white'
        >
          開始
        </button>
    </Flex>
  )
}

export default MissionCard