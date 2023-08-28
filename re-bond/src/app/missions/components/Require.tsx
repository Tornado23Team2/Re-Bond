import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'

type Props = {
  require: boolean
}

const Require = ({require}: Props) => {
  const [imagePath, setImagePath] = useState<string | null>()

  const handleUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImagePath(file.name)
      console.log('画像をアップロードしました')
    }
    
  }
  return (
  <>
    <Flex
      align='flex-start'
      className='w-full mb-2 text-xl'>
      ミッション達成条件
    </Flex>
    {!require
    ? <Flex
        align='flex-start'
        className='border-2 border-baseBlue rounded-3xl p-10 w-full text-2xl mb-5'>
        ・なし
      </Flex>
    : <Flex
        justify='center'
        align='center'
        className='border-2 border-baseBlue rounded-3xl p-10 w-full text-2xl mb-5'>
        <input
            id='requirements'
            type='file'
            accept='.png .jpeg .jpg'
            className='hidden'
            onChange={handleUpload}
            />
            <label htmlFor='requirements'>
              写真をアップロードしよう
            </label>
      </Flex>
    }
  </>
  )
}

export default Require