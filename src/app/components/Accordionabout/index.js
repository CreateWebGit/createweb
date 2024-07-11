import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
//import offerIcon from '../../public/assets/offerIcon.png'
import pointer from '../../../../public/assets/point.png'
import { TfiStatsUp } from 'react-icons/tfi'
import { FiAward } from 'react-icons/fi'
import { FaHandsHelping } from 'react-icons/fa'
import { cn } from '@/utils/utils'

const data = [
  {
    icon: FiAward,
    title: 'Webblösningar i världsklass',
    titleEng: 'World Class Web Solutions',

    text: 'Vi nöjer oss givetvis inte med mindre än de bästa av det bästa till våra kunder! Därför är det avgörande för oss att vara lyhörd för våra kunders behov & ambision, för att sedan kunna ta fram den allra bästa innovativa webblösning ',
    textEng:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis libero eget magna ornare feugiat non at arcu. Phasellus mauris justo, dapibus ut tristique non, condimentum eget nulla. Nunc id tincidunt augue. Suspendisse potenti. Pellentesque vel tortor eros. Sed efficitur, odio at lobortis pretium, risus libero dignissim eros, eget mattis nibh metus eleifend lectus. Proin pulvinar nibh arcu, in varius tellus finibus a. Aenean porta, lacus id porttitor consequat, magna nulla ultrices elit, quis dictum velit risus quis sem.',
    height: 'h-[220px] md:h-[120px]',
  },
  {
    icon: TfiStatsUp,
    title: 'Resultat & Tillväxt',
    titleEng: 'Results & Growth',

    text: 'För oss är det även väldigt viktigt att gå in och göra en behovsanalys av våra kunders kunder, för att kunna komma med ideer & förslag som direkt gynnar din affärsmässiga tillväxt.',
    textEng:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis libero eget magna ornare feugiat non at arcu. Phasellus mauris justo, dapibus ut tristique non, condimentum eget nulla. Nunc id tincidunt augue. Suspendisse potenti. Pellentesque vel tortor eros. Sed efficitur, odio at lobortis pretium, risus libero dignissim eros, eget mattis nibh metus eleifend lectus. Proin pulvinar nibh arcu, in varius tellus finibus a. Aenean porta, lacus id porttitor consequat, magna nulla ultrices elit, quis dictum velit risus quis sem.',
    height: 'h-[220px] md:h-[120px]',
  },
  {
    icon: FaHandsHelping,
    title: 'Vi står kvar vid din sida',
    titleEng: 'We Are Standing By Your Side',

    text: 'Vår erfarenhet visar att i de flesta fall finns det ett behov av att vid ett senare tillfälle vidareutveckla en befintlig färdigbyggd webbplats. Sökordsoptimering och marknadsföring brukar också vara ett naturlig efterföljande steg när företag etablerat sin verksamhet på nätet. Vi finns också 24 / 7 ifall något säkerhetsangrepp eller någon annan plötsligt oförutsett händer som skulle riskera att skada din verksamhet på webben.',
    textEng:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis libero eget magna ornare feugiat non at arcu. Phasellus mauris justo, dapibus ut tristique non, condimentum eget nulla. Nunc id tincidunt augue. Suspendisse potenti. Pellentesque vel tortor eros. Sed efficitur, odio at lobortis pretium, risus libero dignissim eros, eget mattis nibh metus eleifend lectus. Proin pulvinar nibh arcu, in varius tellus finibus a. Aenean porta, lacus id porttitor consequat, magna nulla ultrices elit, quis dictum velit risus quis sem.',
    height: 'h-[220px] md:h-[210px]',
  },
]

const Accordion = ({ inLanguage }) => {
  const [openAccordion, setOpenAccordion] = useState(0)

  const handleClick = (accordionIndex) => {
    setOpenAccordion(openAccordion === accordionIndex ? null : accordionIndex)
  }
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className="relative border-b border-[#ccc]  w-full flex flex-col justify-center"
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="flex flex-row py-2 justify-between items-center cursor-pointer h-20">
              <div className="flex justify-center items-center py-1">
                <div className="p-2 bg-[#F49B11] rounded-md">
                  <item.icon color="white" size={24} />
                </div>
                <div className="ml-6 text-xl">
                  {inLanguage === 'sv' ? item.title : item.titleEng}
                </div>
              </div>
              <div>
                {openAccordion === index ? (
                  <IoIosArrowUp size={22} />
                ) : (
                  <IoIosArrowDown size={22} />
                )}
              </div>
            </div>
            <p
              className={
                openAccordion === index
                  ? `${item.height} overflow-hidden  mr-10 ml-16 transition-all duration-300`
                  : 'h-[0px] overflow-hidden  mr-10 ml-16 transition-all duration-300'
              }
            >
              {inLanguage === 'sv' ? item.text : item.textEng}
            </p>
          </div>
        )
      })}
    </>
  )
}

export default Accordion
