'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Message_data } from '../context/context'

const Card = ({ icon, title, titleEng, text, textEng }) => {
  const { inLanguage } = useContext(Message_data)

  return (
    <div className="snap-center md:flex-grow-1 md:flex-shrink-0 md:basis-[33.333%] px-2 md:box-border mb-4">
      <div className="w-[350px] md:w-auto border rounded-md h-full p-8 shadow-md ">
        <div className="border border-[#F49A11] rounded-full flex justify-center items-center h-16 w-16 ">
          {icon}
        </div>
        <div className="mt-4 text-2xl font-bold">{inLanguage === 'sv' ? title : titleEng}</div>
        <div className="w-[40px] h-[4px] mt-1 mb-4 rounded-md bg-[#F49A11]" />
        <div>{inLanguage === 'sv' ? text : textEng}</div>
      </div>
    </div>
  )
}

export default Card
