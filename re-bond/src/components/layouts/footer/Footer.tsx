import { Flex } from '@/components/elements/box/Flex'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const BUTTON = [
    {
      name: 'ホーム',
      sub: 'Home',
      icon_path: '/footer/home.svg',
      path: '/home'
    },
    {
      name: 'QRコード',
      sub: 'QRcode',
      icon_path: '/footer/qr.svg',
      path: '/qr'
    },
    {
      name: 'フレンド',
      sub: 'Friend',
      icon_path: '/footer/friend.svg',
      path: '/friend'
    },
    {
      name: 'メッセージ',
      sub: 'message',
      icon_path: '/footer/dm.svg',
      path: '/message'
    },
    {
      name: 'プロフィール設定',
      sub: 'prof-settings',
      icon_path: '/footer/settings.svg',
      path: '/prof-settings'
    }
  ]
  return (
    <>
      <Flex
        justify='center'
        align='center'
        className='fixed bottom-0 z-30 w-full h-[80px] bg-[#fff] border-t-2 border-baseBlue'
      >
        {BUTTON.map((button, index) => (
          <Link href={button.path} key={index}>
            <Flex
              align='center'
              justify='center'
              className='w-[78px] h-[80px]'>
              <Image
                  src={button.icon_path}
                  width={38}
                  height={38}
                  alt={button.sub}
                />
            </Flex>
          </Link>
        ))}
      </Flex>
    </>
  )
}

export default Footer