import React from 'react'
import { Missions } from '../types/missions'
import { Flex } from '@/components/elements/box/Flex'

type MissionProps = {
  mission: Missions
  Deactivate: () => void
}

const MissionDetails = ({mission, Deactivate}: MissionProps) => {
  return (
    <Flex>
      <button onClick={Deactivate}>
        戻る
      </button>
      <div>{mission.name}</div>
      <div>{mission.level}</div>
    </Flex>
  )
}

export default MissionDetails