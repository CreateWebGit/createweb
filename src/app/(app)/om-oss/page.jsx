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
      <div className="w-full h-[150px] bg-white">
        <Navbar white={true} />
      </div>

      <main>
        <section className="bg-white">
          <div className="pt-12 w-full md:w-[1200px] m-auto px-4">
            <div className="relative flex flex-col-reverse md:flex-row gap-4 mx-3">
              <div className="relative h-[80vh] w-full z-50 flex items-end justify-end md:w-1/2">
                <div className="absolute top-0 left-0 border-l-8 border-double border-t-8 border-l-orange-600 border-t-orange-600 rounded-tl-lg h-[300px] w-[300px]" />
                <div className="relative h-[96%] w-[96%]">
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
                <h3 className="text-xl text-[#1B45B4]">OM OSS </h3>
                <h2 className="text-3xl">
                  Vi stödjer nystartade samt etablarade företag att få växa i sin verksamhet
                </h2>

                <p>
                  CreateWeb är ett webbutvecklar företag som nu expandrar snabbt. Vi har stor
                  ambition till att alltid ligga steget före, så att vi kan tillhandahålla 100% av
                  vad vi hävdar. Vårt huvudfokus är att skapa bästa webbuplevelsen, med högt
                  kompetenta utvecklare och designer, för individer och företag.
                </p>
                <div className="my-4">
                  <Link
                    href={'/om-oss'}
                    className="bg-gradient-to-r from-[#9F3CD7] to-[#BC47DD] rounded-md shadow-xl text-white cursor-pointer text-sm m-1 py-2 px-3 text-center"
                  >
                    Läs mer
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center bg-[#BC47DD] w-[88%] h-[120px] top-[-55px] left-[50%] ml-[-42%] md:ml-[-44%] py-5 px-4 rounded-md text-2xl text-white text-center z-50">
              {inLanguage === 'sv'
                ? '“Vi har en passion i att få leverera högkvalitativt och användarvänligt teknik för att hjälpa våra kunder att nå sina mål”'
                : '“We have a passion for delivering high-quality and user-friendly technology to help our customers achieve their goals”'}
            </div>
          </div>
        </section>
        <section className="bg-[#F6F6F6] ">
          <div className="py-16 px-4 py-32 shadow-inner">
            <div className="w-full m-auto flex flex-col justify-between gap-8 md:flex md:flex-row md:w-[1200px]">
              <div>
                <div
                  className="myShadowMobile myShadow bg-white h-[300px] flex flex-col justify-between items-center
               mx-4 px-16 py-10"
                >
                  <FaHandshake size={110} color={'#C13A2B'} />
                  <p className="text-xl text-center tracking-[2px]">
                    {inLanguage === 'sv' ? 'VI TAR DET PÅ ALVAR' : 'WE TAKE IT SERIOUSLY'}
                  </p>
                  <p className="">{inLanguage === 'sv' ? 'Ansvar' : 'Responsibility'}</p>
                </div>
              </div>
              <div>
                <div
                  className="myShadowMobile myShadow bg-white h-[300px] shadow-[0px 20px 21px -13px #b25d43], flex flex-col justify-between items-center
               mx-4 px-16 py-10"
                >
                  <FaAllergies size={110} color={'#C13A2B'} />
                  <p className="text-xl text-center tracking-[2px]">
                    {inLanguage === 'sv' ? 'VI ÄR DEDIKERADE' : 'WE ARE DEDICATED'}
                  </p>
                  <p className="">{inLanguage === 'sv' ? 'Kreativitet' : 'Creativity'}</p>
                </div>
              </div>
              <div>
                <div
                  className="myShadowMobile myShadow bg-white h-[300px] shadow-[0px 20px 21px -13px #b25d43], flex flex-col justify-between items-center
               mx-4 px-16 py-10"
                >
                  <FaRegEye size={110} color={'#C13A2B'} />
                  <p className="text-xl text-center tracking-[2px]">
                    {inLanguage === 'sv' ? 'VI ÄR FOKUSERADE' : 'WE ARE FOCUSED'}
                  </p>
                  <p className="">{inLanguage === 'sv' ? 'Kvalitet' : 'Quality'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
        <section className="bg[#EBF7FE]">
          <div className="flex w-[1200px] m-auto">
            <div className="w-1/2 pr-8">
              <div className="flex flex-col justify-center items-end h-full">
                <h3 className="text-xl text-right text-[#1B45B4]">
                  {inLanguage === 'sv' ? 'Om oss' : 'About us'}
                </h3>
                <h2 className="text-5xl text-right font-bold">
                  {inLanguage === 'sv'
                    ? 'Vi tror på bra team och högt i tak!'
                    : 'We believe in good committee and high ceilings!'}
                </h2>
                <div className="text-justify w-[500px] float-end">
                  <p>
                    {inLanguage === 'sv'
                      ? 'Vi tar dig smidigt från idé till färdig hög kvalitativ produkt. Från första steget att återkoppla och återskapa din idé. Utforska och designa den till bästa webbupplevelsen.'
                      : 'We take you smoothly from idea to finished high-quality product. From the first step of hearing and recreating your idea. Research and design the best web experience.'}
                  </p>
                  <p>
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
            </div>

            <div className="relative h-[600px] w-1/2">
              <Image
                src={skyStudio}
                alt="Computor"
                fill={true}
                objectFit="cover"
                className=""
                priority
              />
            </div>
          </div>
        </section>
        */}
        <section className=" bg-white">
          <div className="py-12 w-full md:w-[1200px] m-auto px-4">
            <div className="relative flex flex-col-reverse md:flex-row gap-4 mx-3">
              <div className="flex flex-col gap-2 justify-center items-end text-justify w-full md:w-1/2">
                <h3 className="text-xl text-right text-[#1B45B4]">
                  {inLanguage === 'sv' ? 'Om oss' : 'About us'}
                </h3>
                <h2 className="text-5xl text-right font-bold">
                  {inLanguage === 'sv'
                    ? 'Vi tror på bra team och högt i tak!'
                    : 'We believe in good committee and high ceilings!'}
                </h2>
                <div className="text-justify w-[500px] float-end">
                  <p>
                    {inLanguage === 'sv'
                      ? 'Vi tar dig smidigt från idé till färdig hög kvalitativ produkt. Från första steget att återkoppla och återskapa din idé. Utforska och designa den till bästa webbupplevelsen.'
                      : 'We take you smoothly from idea to finished high-quality product. From the first step of hearing and recreating your idea. Research and design the best web experience.'}
                  </p>
                  <p>
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
              <div className="relative h-[80vh] w-full z-50 flex items-end justify-start md:w-1/2">
                <div className="absolute top-0 right-0 border-r-8 border-double border-t-8 border-r-orange-600 border-t-orange-600 rounded-tr-lg h-[300px] w-[300px]" />
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
            <h2>Vi är experter på energieffektiva lösningar</h2>
          </div>
        </section>
        <section className=" bg-white">
          <div className="py-24 w-full md:w-[1200px] m-auto px-4">
            <div className="relative flex flex-col-reverse md:flex-row gap-4 mx-3">
              <div className="relative h-[80vh] w-full z-50 flex items-end justify-end md:w-1/2">
                <div className="absolute top-0 left-0 border-l-8 border-double border-t-8 border-l-orange-600 border-t-orange-600 rounded-tl-lg h-[300px] w-[300px]" />
                <div className="relative h-[96%] w-[96%]">
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
                <h3 className="text-xl text-[#1B45B4]">OM OSS </h3>
                <h2 className="text-3xl">
                  Vi stödjer nystartade samt etablarade företag att få växa i sin verksamhet
                </h2>

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
