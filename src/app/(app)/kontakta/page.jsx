'use client'
import Contact from '@/app/components/Contact'
import React, { useContext } from 'react'
import Head from 'next/head'

import Navbar from '@/app/components/Navbar'
import { Message_data } from '@/app/context/context'

import contactImg from '../../../../public/assets/contact.png'
import Image from 'next/image'

const pageContact = () => {
  const { inLanguage } = useContext(Message_data)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="some text" />
      </Head>
      <Navbar white={true} />

      <div className="mt-[200px] px-8 w-full md:w-[1200px] m-auto flex relative">
        <div className=" w-full md:w-1/2 bg-white">
          <Contact inLanguage={inLanguage} />
        </div>
        <div className="w-0 md:w-1/2">
          <Image
            className="absolute -right-10 mt-[-170px] -z-10 w-[300px] h-auto md:w-[500px] md:relative md:mt-0"
            src={contactImg}
            width={500}
          />
        </div>
      </div>
    </>
  )
}

export default pageContact
