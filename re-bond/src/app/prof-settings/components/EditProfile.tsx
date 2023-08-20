import { Flex } from '@/components/elements/box/Flex'
import React from 'react'

const EditProfile = () => {
  return (
    <>
      <Flex
        align='center'
        justify='center'
      >
        <label htmlFor='profile'>
          <p>プロフィールLv{}</p>
          <input
            type='field'
            id='profile'
            placeholder={`プロフィールLv${1}`}
            className='p-3 rounded-sm bg-gray-200'
          />
        </label>
      </Flex>
    </>
  )
}

export default EditProfile