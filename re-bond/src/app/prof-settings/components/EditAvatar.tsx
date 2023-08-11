'use client'
import React, { useState } from 'react'
import { Flex } from '@/components/elements/box/Flex'
import Image from 'next/image'

const EditAvatar = () => {
  const [imagePath, setImagePath] = useState<string | null>('avatars/defaultAvatar.png')

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
        align='center'
        direction='row'
        className='m-5'>
        <Image
          src={'/'+imagePath}
          width={100}
          height={100}
          alt='YourAvatar'
          className='max-w-[100px] max-h-[100px] rounded-full'
        />
        <Flex
          justify='center'
          align='center'
          className='m-3 p-3 h-10 border-[1px] rounded-sm border-gray-800'>
            <input
            id='avatar'
            type='file'
            accept='image/*'
            className='hidden'
            onChange={handleUpload}
            />
            <label htmlFor="avatar">
              Upload Image
            </label>
        </Flex>
      </Flex>
    </>
  )
}

export default EditAvatar