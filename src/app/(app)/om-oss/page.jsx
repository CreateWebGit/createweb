'use client'
import { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '@/app/components/Navbar'
import { Message_data } from '@/app/context/context'
//import Accordionabout from '../components/Accordionabout'
import Footer from '@/app/components/Footer'

import { FaHandshake, FaAllergies } from 'react-icons/fa'
import { FaRegEye } from 'react-icons/fa'
import { useScrollInfo } from '@faceless-ui/scroll-info'

import aboutpic from '../../../../public/assets/aboutpic.png'
import aboutImage from '../../../../public/assets/aboutPic.jpg'
import newHeight from '../../../../public/about/newHeight.jpg'
import aboutpic123 from '../../../../public/assets/about123.png'
import skyStudio from '../../../../public/assets/skye-studios.jpg'
import bg from '../../../../public/assets/gcp.jpg'
import aboutOffer from '../../../../public/assets/aboutOffer.png'
import Link from 'next/link'
import Accordion from '@/app/components/Accordionabout'

const pageAbout = () => {
  const { inLanguage } = useContext(Message_data)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="some text" />
      </Head>
      <div className="w-full h-[100px] bg-white">
        <Navbar white={true} />
      </div>

      <main>
        <section className="bg-white pt-8 md:pt-16">
          <div className=" w-full md:w-[1200px] m-auto px-4">
            <div className="relative flex flex-col-reverse mx-0 pb-8 md:flex-row gap-4 md:mx-3 md:pb-0">
              <div className="hidden relative h-[80vh] w-full z-50 items-end justify-end md:w-1/2 md:flex">
                <div className="absolute top-0 left-0 border-l-8 border-double border-t-8 border-l-[#F49B11] border-t-[#F49B11] rounded-tl-lg h-[300px] w-[300px]" />
                <div className="relative w-full h-full mx-4 md:h-[96%] md:w-[96%] md:mx-0">
                  <Image
                    src={aboutImage}
                    alt="Computor"
                    fill={true}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-start w-full md:w-1/2">
                <h3 className="text-2xl text-[#1B45B4]">OM OSS </h3>
                <h2 className="text-3xl">
                  Vi stödjer nystartade samt etablarade företag att få växa i sin verksamhet
                </h2>
                <div className="flex relative pt-4 h-[40vh] w-full z-50 items-end justify-end md:w-1/2 md:hidden">
                  <div className="absolute top-0 left-0 border-l-8 border-double border-t-8 border-l-orange-600 border-t-orange-600 rounded-tl-lg h-[200px] w-[200px]" />
                  <div className="relative w-full h-full mx-4 md:h-[96%] md:w-[96%] md:mx-0">
                    <Image
                      src={aboutImage}
                      alt="Computor"
                      fill={true}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <p>
                  CreateWeb är ett webbutvecklar företag som nu expandrar snabbt. Vi har stor
                  ambition till att alltid ligga steget före, så att vi kan tillhandahålla 100% av
                  vad vi hävdar. Vårt huvudfokus är att skapa bästa webbuplevelsen, med högt
                  kompetenta utvecklare och designer, för individer och företag.
                </p>
              </div>
            </div>

            <div className="hidden relative justify-center items-center bg-[#F49B11] w-[88%] top-[-55px] left-[50%] ml-[-44%] md:ml-[-44%] py-5 px-4 rounded-md text-2xl text-white text-center z-50 md:flex">
              {inLanguage === 'sv'
                ? '“Vi har en passion i att få leverera högkvalitativt och användarvänligt teknik för att hjälpa våra kunder att nå sina mål”'
                : '“We have a passion for delivering high-quality and user-friendly technology to help our customers achieve their goals”'}
            </div>
          </div>
        </section>
        <section className="bg-[#F6F6F6] ">
          <div className="px-4 py-16 md:py-32 shadow-inner">
            <div className="w-full m-auto flex flex-col justify-between gap-8 md:flex md:flex-row md:w-[1200px]">
              <div>
                <div
                  className=" myShadow bg-white h-[300px] flex flex-col justify-between items-center
               mx-4 px-16 py-10"
                >
                  <FaHandshake size={110} color={'#F49B11'} />
                  <p className="text-xl text-center tracking-[2px]">
                    {inLanguage === 'sv' ? 'VI TAR DET PÅ ALVAR' : 'WE TAKE IT SERIOUSLY'}
                  </p>
                  <p className="">{inLanguage === 'sv' ? 'Ansvar' : 'Responsibility'}</p>
                </div>
              </div>
              <div>
                <div
                  className=" myShadow bg-white h-[300px] shadow-[0px 20px 21px -13px #b25d43], flex flex-col justify-between items-center
               mx-4 px-16 py-10"
                >
                  <FaAllergies size={110} color={'#F49B11'} />
                  <p className="text-xl text-center tracking-[2px]">
                    {inLanguage === 'sv' ? 'VI ÄR DEDIKERADE' : 'WE ARE DEDICATED'}
                  </p>
                  <p className="">{inLanguage === 'sv' ? 'Kreativitet' : 'Creativity'}</p>
                </div>
              </div>
              <div>
                <div
                  className=" myShadow bg-white h-[300px] shadow-[0px 20px 21px -13px #b25d43], flex flex-col justify-between items-center
               mx-4 px-16 py-10"
                >
                  <FaRegEye size={110} color={'#F49B11'} />
                  <p className="text-xl text-center tracking-[2px]">
                    {inLanguage === 'sv' ? 'VI ÄR FOKUSERADE' : 'WE ARE FOCUSED'}
                  </p>
                  <p className="">{inLanguage === 'sv' ? 'Kvalitet' : 'Quality'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-white">
          <div className="py-12 w-full md:w-[1200px] m-auto px-4">
            <div className="relative flex flex-col-reverse md:flex-row gap-0 mx-0 md:gap-4 md:mx-3">
              <div className="flex flex-col gap-0 md:gap-2 justify-center items-start md:items-end text-justify w-full md:w-1/2">
                <h3 className="text-xl text-[#1B45B4]">
                  {inLanguage === 'sv' ? 'Om oss' : 'About us'}
                </h3>
                <h2
                  style={{ whiteSpace: 'pre-line' }}
                  className="text-3xl text-left mb-4 md:text-right"
                >
                  {inLanguage === 'sv'
                    ? 'Vi tror på bra team \n och högt i tak!'
                    : 'We believe in good committee \n and high ceilings!'}
                </h2>
                <div className="relative h-[40vh] flex flex-row pt-4 my-6 w-full z-50 md:hidden">
                  <div className="absolute top-0 right-0 border-r-8 border-double border-t-8 border-r-[#F49B11] border-t-[#F49B11] rounded-tr-lg h-[200px] w-[200px]" />
                  <div className="relative w-full h-full mx-4">
                    <Image
                      src={skyStudio}
                      alt="Computor"
                      fill={true}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="text-justify w-full md:w-[500px] float-end">
                  <p className="mb-2">
                    {inLanguage === 'sv'
                      ? 'Vi tar dig smidigt från idé till färdig hög kvalitativ produkt. Från första steget att återkoppla och återskapa din idé. Utforska och designa den till bästa webbupplevelsen.'
                      : 'We take you smoothly from idea to finished high-quality product. From the first step of hearing and recreating your idea. Research and design the best web experience.'}
                  </p>
                  <p className="mb-2">
                    {inLanguage === 'sv'
                      ? 'Utvecklar den mest robusta och effektiva koden. Sen se till att vi har en bra överlämningsprocess, där du kan luta dig säkert tillbaka och njut av produkten du tänkt dig från dag ett.'
                      : 'Develop the most robust and efficient code. Then to make sure we have a good handover process, where you can safely sit back and enjoy the product you envisioned from day one.'}
                  </p>
                  <p>
                    {inLanguage === 'sv'
                      ? 'För varje steg på vägen har vi kontakt så mycket du vill. Om du vill, varje dag. Vi är effektiva och vi är kompromisslös när det gäller att leverera bästa möjliga produkt till dig.'
                      : 'For every step of the way, we talk as much as you want. If you want, every day. We are agile and we are uncompromising in delivering the best possible product for you.'}
                  </p>
                </div>
              </div>
              <div className="hidden relative h-[80vh] w-full z-50 items-end justify-start md:w-1/2 md:flex">
                <div className="absolute top-0 right-0 border-r-8 border-double border-t-8 border-r-[#F49B11] border-t-[#F49B11] rounded-tr-lg h-[300px] w-[300px]" />
                <div className="relative h-[96%] w-[96%]">
                  <Image
                    src={skyStudio}
                    alt="Computor"
                    fill={true}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-transparent">
          <div class="backgroundFixed"></div>
          <div className="sloganContainerFilter">
            <h2 className="test text-3xl text-[#F49B11] text-center font-extrabold py-16 md:py-32 md:text-5xl">
              VI ÄR EXPERTER PÅ OPTIMALA WEBBLÖSNINGAR
            </h2>
          </div>
        </section>
        <section className=" bg-white">
          <div className="py-24 w-full md:w-[1200px] m-auto px-4">
            <div className="relative flex flex-col-reverse md:flex-row gap-4">
              <div className="hidden relative h-[80vh] w-full z-50 items-end justify-end md:w-1/2 md:flex">
                <div className="absolute top-0 left-0 border-l-8 border-double border-t-8 border-l-[#F49B11] border-t-[#F49B11] rounded-tl-lg h-[300px] w-[300px]" />
                <div className="relative h-[96%] w-[96%]">
                  <Image
                    src={newHeight}
                    alt="Computor"
                    fill={true}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-start items-start w-full md:w-1/2">
                <h3 className="text-xl text-[#1B45B4]">OM OSS </h3>
                <h2 className="text-3xl">
                  Vi dedikerar oss till att ta er verksamhet till nya höjder!
                </h2>

                <div className="flex relative h-[40vh] w-full pt-4 z-50 items-end justify-end md:hidden">
                  <div className="absolute top-0 left-0 border-l-8 border-double border-t-8 border-l-orange-600 border-t-orange-600 rounded-tl-lg h-[200px] w-[200px]" />
                  <div className="relative w-full h-full mx-4">
                    <Image
                      src={newHeight}
                      alt="Computor"
                      fill={true}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <Accordion inLanguage={inLanguage} />
              </div>
            </div>
          </div>
        </section>
        <Footer inLanguage={inLanguage} />
      </main>
    </>
  )
}

export default pageAbout
