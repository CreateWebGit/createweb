import React, { useState } from 'react'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { LiaHandHoldingUsdSolid } from 'react-icons/lia'
import { GiPencilRuler } from 'react-icons/gi'
import { TbEyeCode } from 'react-icons/tb'

const data = [
  {
    icon: LiaHandHoldingUsdSolid,
    title: 'Seriöst Ansvarliga',
    titleEng: 'Serious Responibility',

    text: 'Det är av all vikt för oss att du skall lyckas med din verksamhet på webben! Det ligger i vårt ansvar att att hjälpa dig strategiskt steg för steg att uppnå dina mål. Därför är de av all vikt för oss på createweb att bygga upp förtroendeingivande och långsiktiga kundrelationer med våra kunder. ',
    textEng:
      'It is of the utmost importance to us that you succeed with your business on the web! It is our responsibility to help you strategically step by step to achieve your goals. Therefore, they are of utmost importance to us at createweb to build trust-inspiring and long-term customer relationships with our customers.',
    height: 'h-[220px] md:h-[160px]',
  },
  {
    icon: GiPencilRuler,
    title: 'Dedikerat Kreativa',
    titleEng: 'Dedicated Creativity',

    text: 'För att kunna skräddarsy den bästa optimala lösningen så att du som kund får ut de mest lönsamma utifrån dina visioner & mål, kräver av oss att kunna vara tranparanta & kreativa gälande tekniska och designmässiga lösningar.',
    textEng:
      'To be able to tailor the best optimal solution so that you as a customer get the most profitable based on your visions & goals, requires us to be transparent & creative regarding technical and design solutions.',
    height: 'h-[170px] md:h-[110px]',
  },
  {
    icon: TbEyeCode,
    title: 'Kvalitetsfokuserade',
    titleEng: 'Quality Focus',

    text: 'Varenda minsta detalj har en avgörande betydelse i sin helhet! Vi vill att du som kund ska känna dig trygg att kunna lägga ditt projekt i våra händer med toppkvalitet och hållbarhet över tid, vi behöver därför noggrant granska och vara öppen för att revidera varje steg i vår arbetsprocess.',
    textEng:
      'Every little detail has a decisive importance in its entirety! We want you as a customer to feel secure in being able to put your project in our hands with top quality and durability over time, we therefore need to carefully review and be open to revising every step of our work process.',
    height: 'h-[220px] md:h-[140px]',
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
            className="relative py-6 border-b border-[#ccc]  w-full flex flex-col justify-center"
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="flex flex-row  justify-between items-center cursor-pointer  h-full">
              <div className="flex justify-center items-center">
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
            <div
              className={
                openAccordion === index
                  ? `${item.height} overflow-hidden  mr-10 ml-16 transition-all duration-300`
                  : 'h-[0px] overflow-hidden  mr-10 ml-16 transition-all duration-300'
              }
            >
              {inLanguage === 'sv' ? item.text : item.textEng}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Accordion
