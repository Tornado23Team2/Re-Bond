"use client"
import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const qrCodeValue = 'https://google.com'; // QR コードに表示する値を設定

  return (
    <>
      <main>
        <Flex
          direction='column'
          align='center'
          className='w-full h-auto p-3'
        >
          <h2>QRコード</h2>
          <div className='mt-3'>
            <QRCode value={qrCodeValue} size={200} />
          </div>
        </Flex>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default QRCodePage;
