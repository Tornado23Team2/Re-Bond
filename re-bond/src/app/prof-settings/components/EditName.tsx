'use client'
import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'

const EditName = () => {

  return (
    <>
      <Flex
        align='center'
        justify='center'
        className=''
      >
        <label htmlFor='name'>
          <p>ユーザー名</p>
          <input
            type='text'
            id='name'
            defaultValue={'hogehoge'}
            placeholder="ユーザー名"
            className='p-3 rounded-sm bg-gray-200'
          />
        </label>
      </Flex>
    </>
  )
}

export default EditName