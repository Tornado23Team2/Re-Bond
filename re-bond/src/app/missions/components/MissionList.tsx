'use client'

import { Flex } from '@/components/elements/box/Flex'
import React, { useEffect, useState } from 'react'
import MissionCard from './MissionCard'
import { Missions } from '../types/missions'

type MissionListProps = {
  selectedLv:number
  missionData: Missions[]
}

const MissionList = ({ selectedLv, missionData }: MissionListProps) => {
  const [selectedMissions, setSelectedMissions] = useState<Missions[]>([])

  useEffect(() => {
    // selectedLv に応じてミッションデータをフィルタリング
    const filteredMissions = missionData.filter((mission) => mission.level === selectedLv)

    // ランダムに5つのミッションを選択
    const randomMissions = getRandomMissions(filteredMissions, 5)
    setSelectedMissions(randomMissions)

  }, [selectedLv, missionData])
  
  // ランダムにミッションを抽選する関数
  const getRandomMissions = (missions: Missions[], count: number): Missions[] => {
    const shuffledMissions = missions.sort(() => 0.5 - Math.random())
    return shuffledMissions.slice(0, count)
  }

  return (
    <Flex
      align='center'
      justify='center'
      direction='column'
      className='w-full mt-[1px] px-12 border-t-2 border-baseBlue'>
        Missions for level.{selectedLv}
        {selectedMissions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
    </Flex>
  )
}

export default MissionList