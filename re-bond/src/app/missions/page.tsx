'use client'

import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React, { useEffect, useState } from 'react'
import SelectLvTab from './components/SelectLvTab'
import MissionList from './components/MissionList'
import { getDocs } from 'firebase/firestore'
import requests from '../../../utils/requests'
import { collectionRef } from '../../../firebase/firebase'
import { Missions } from './types/missions'

const page = () => {
  const [selectedLv, setSelectedLv] = useState(1)
  const [missionData, setMissionData] = useState<Missions[]>([])

  // ページ表示時にミッションデータをフェッチ
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef)
        const missionsData: Missions[] = querySnapshot.docs.map((doc) => doc.data() as Missions)
        setMissionData(missionsData)
      } catch (error) {
        console.log('Error fetching missions:', error)
      }
    }
    fetchMissions()
  }, [])

  return (
    <>
      <main>
        <Flex
          direction='column'
          className='w-full h-auto'>
          
          {/* レベル別のタブ切り替え */}
          <SelectLvTab levels={[1,2,3,4,5]} onSelect={setSelectedLv}/>

          {/* 選択したレベルのリストを表示 */}
          <MissionList selectedLv={selectedLv} missionData={missionData} />
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page