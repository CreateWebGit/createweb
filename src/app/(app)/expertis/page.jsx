'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Navbar from '@/app/components/Navbar'

import { GiPencilRuler } from 'react-icons/gi'
import { PiCodeDuotone } from 'react-icons/pi'
import { IoPulseOutline } from 'react-icons/io5'
import { MdSupportAgent } from 'react-icons/md'
import bg from '../../../../public/service/bg1.jpg'
import timelinePic from '../../../../public/assets/timeline.png'
import timelinePicMobile from '../../../../public/assets/timelineMobile.png'
import Footer from '@/app/components/Footer'
import { Message_data } from '@/app/context/context'

const pageExpertis = () => {
  const [index, setIndex] = useState(0)
  const [test, setTest] = useState(true)

  const { inLanguage } = useContext(Message_data)

  useEffect(() => {
    /*
    window.onresize = displayWindowSize
    window.onload = displayWindowSize

    function displayWindowSize() {
      let myWidth = window.innerWidth
      let myHeight = window.innerHeight
      if (myWidth > 800) {
        // setMyTimer()
      }
      // your size calculation code here
      document.getElementById('screen').innerHTML = myWidth + 'x' + myHeight
    }
    displayWindowSize()
    */
  })

  let timer = setTimeout(() => {
    // setIndex(() => {
    if (test) {
      if (index < 3) {
        console.log('current index:', index)
        if (test) {
          setIndex(index + 1)
        }
      } else {
        //clearInterval(timer)
        setIndex(0)
        return index
      }
    }
    // })
  }, 2000)

  const functionOne = () => {
    setTest(false)
  }

  const functionTwo = (index) => {
    setIndex(index)
  }

  const handleClick = (index) => {
    clearTimeout(timer)

    functionOne()

    setTimeout(() => {
      functionTwo(index)
    }, 500)
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="some text" />
      </Head>
      <Navbar white={true} />
      <main className="mt-[90px] md:mt-[110px]">
        <section className="mb-12">
          <div className="bg-slate-100 md:hidden">
            <div className=" overscroll-x-contain overflow-x-scroll overflow-y-hidden flex m-auto snap-mandatory snap-x  py-8">
              <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                <h2 className="text-center w-[80vw] text-2xl my-4"> Webbdesign </h2>
                <p className="text-xl">
                  Vi förstår vikten utav och är bestämt dedikerade till att skräddarsy in i detalj
                  våra kunders webbdesign, så att de tydligt passar just deras verksamhet.och
                  kundkrets.
                </p>
              </div>
              <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                <h2 className="text-center w-[80vw] text-2xl my-4"> Webbutveckling </h2>
                <p className="text-xl">
                  Tekniskt sett är de viktigt för oss att kunna i första hand erbjuda
                  webbapplikation, bokningssystem, e - handel m.m som är byggd av oss från grunden.
                  Vi lutar oss ogärna mot tredje parts lösningar. Vi anser att det blir sällan
                  kostnadseffektivt i längden. Nästan samtliga av våra sajter är uppbyggda i React,
                  vilket gör att dessa webbsidor prestandamässigt och säkerhetsmässigt till
                  toppklass sidor. Dessutom är de bästa utgångsläget gällande sökordsoptimering.
                </p>
              </div>
              <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                <h2 className="text-center w-[80vw] text-2xl my-4"> Marknadsföring </h2>
                <p className="text-xl">
                  Att marknadsföra sig på webben är minst lika viktigt som att ha en professionell
                  webbapplikation! Vi har god erfarenhet och är professionella inom
                  sökordsoptimering och annonsering, samt bygga upp varumärke kring de olika kanaler
                  inom sociala medier.
                </p>
              </div>
              <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                <h2 className="text-center w-[80vw] text-2xl my-4"> Support </h2>
                <p className="text-xl">
                  Ett av de främsta målen vi har är ett tryggt och långsiktigt samarbete med våra
                  kunder. Supportavtal brukar vara populärt där vi ser till att eran webbplats
                  fungerar optimalt över tid. Det kan också innefatta att vi är behjälpliga på eran
                  webbplats. Där vi hjälper till att hålla webbsidans innehåll i aktiv rörelse,
                  uppdaterar bilder och texter m.m efter överenskommelse.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="absolute h-[600px] py-32 w-full -z-20 bg-white">
              <Image
                src={bg}
                alt="webbutveckling bakgrund"
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="bg-white h-[600px] w-full absolute -z-10 opacity-90" />
            <div className="flex h-[600px] w-[1200px] m-auto ">
              <div className="flex flex-col justify-center  flex-grow-0">
                <div className="flex h-1/2">
                  <div
                    onClick={() => handleClick(0)}
                    className="flex flex-col justify-between flex-grow bg-white cursor-pointer rounded-md w-[220px] py-4 my-4 mr-8 shadow-md z-[999]"
                  >
                    <h2 className="text-center text-2xl"> Webbdesign </h2>
                    <GiPencilRuler
                      size={46}
                      className="m-auto"
                      color={index === 0 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">Det är detaljerna som räknas</p>
                  </div>
                  <div
                    onClick={() => handleClick(1)}
                    className="flex flex-col justify-between flex-grow bg-white cursor-pointer rounded-md w-[220px] py-4 my-4 mr-8 shadow-md"
                  >
                    <h2 className="text-center text-2xl"> Webbutveckling </h2>
                    <PiCodeDuotone
                      size={46}
                      className="m-auto"
                      color={index === 1 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">Skräddarsytt & Inavativa lösningar</p>
                  </div>
                </div>
                <div className="flex h-1/2">
                  <div
                    onClick={() => handleClick(2)}
                    className="flex flex-col justify-between flex-grow bg-white cursor-pointer rounded-md w-[220px] py-4 my-4 mr-8 shadow-md"
                  >
                    <h2 className="text-center text-2xl"> Marknadsföring </h2>
                    <IoPulseOutline
                      size={46}
                      className="m-auto"
                      color={index === 2 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">Vi ser till att du står i centrum</p>
                  </div>
                  <div
                    onClick={() => handleClick(3)}
                    className="flex flex-col justify-between flex-grow bg-white cursor-pointer rounded-md w-[220px] py-4 my-4 mr-8 shadow-md"
                  >
                    <h2 className="text-center text-2xl"> Support </h2>
                    <MdSupportAgent
                      size={46}
                      className="m-auto"
                      color={index === 3 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">Vi bygger långsiktiga relationer</p>
                  </div>
                </div>
              </div>
              <div className="flex-grow-1 flex flex-col  my-4 px-4 w-full border bg-white/50">
                {index === 0 ? <h2 className="text-2xl text-center py-8">Webbdesign</h2> : ''}
                <p className="text-xl">
                  {index === 0
                    ? 'Vi förstår vikten utav och är bestämt dedikerade till att skräddarsy in i detalj våra kunders webbdesign, så att de tydligt passar just deras verksamhet.och kundkrets.'
                    : ''}
                </p>

                {index === 1 ? <h2 className="text-2xl text-center py-8">Webbutveckling</h2> : ''}
                <p className="text-xl">
                  {index === 1
                    ? 'Tekniskt sett är de viktigt för oss att kunna i första hand erbjuda webbapplikation, bokningssystem, e - handel m.m som är byggd av oss från grunden. Vi lutar oss ogärna mot tredje parts lösningar. Vi anser att det blir sällan kostnadseffektivt i längden. Nästan samtliga av våra sajter är uppbyggda i React, vilket gör att dessa webbsidor prestandamässigt och säkerhetsmässigt till toppklass sidor. Dessutom är de bästa utgångsläget gällande sökordsoptimering.'
                    : ''}
                </p>

                {index === 2 ? <h2 className="text-2xl text-center py-8">Marknadsföring</h2> : ''}
                <p className="text-xl">
                  {index === 2
                    ? 'Att marknadsföra sig på webben är minst lika viktigt som att ha en professionell webbapplikation! Vi har god erfarenhet och är professionella inom sökordsoptimering och annonsering, samt bygga upp varumärke kring de olika kanaler inom sociala medier. '
                    : ''}
                </p>

                {index === 3 ? <h2 className="text-2xl text-center py-8">Support</h2> : ''}
                <p className="text-xl">
                  {index === 3
                    ? 'Ett av de främsta målen vi har är ett tryggt och långsiktigt samarbete med våra kunder. Supportavtal brukar vara populärt där vi ser till att eran webbplats fungerar optimalt över tid. Det kan också innefatta att vi är behjälpliga på eran webbplats. Där vi hjälper till att hålla webbsidans innehåll i aktiv rörelse, uppdaterar bilder och texter m.m efter överenskommelse.'
                    : ''}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full h-[1296px] md:h-[500px] my-24">
          <div className="absolute h-[1296px] py-5 px-12 md:py-0 md:px-0 md:left-1/2 md:ml-[-500px] md:w-[1000px] md:h-auto">
            <Image className="absolute w-full h-auto m-auto hidden md:block" src={timelinePic} />
            <Image
              className="absolute h-[1096px] bottom-20 m-auto md:hidden"
              src={timelinePicMobile}
            />
            <h4 className="text-[#1B45B4] text-xl">PROCESS</h4>
            <h2 className="text-2xl font-bold">Här är vår arbetsprocess</h2>
            <div className="absolute flex top-[200px] left-[20px] md:top-[250px] md:left-[30px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">Steg 1</h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h2 className="absolute inline-block mt-[-30px] top-0 right-0 text-[182px] font-bold text-[#FAE3C3] z-40 md:mt-[-60px]">
                  1
                </h2>
                <h3 className="relative mt-7 mb-1 text-2xl font-bold">
                  Planera och <br /> Möta kund
                </h3>
                <p className="relative w-48 text-sm z-50">
                  Definiera projektets mål och målsättningar. Sammanställa Kravspecifikation från
                  intressenter och kunder.
                </p>
              </div>
            </div>
            <div className="absolute flex top-[500px] left-[20px] md:top-[90px] md:left-[250px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">Steg 2</h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h3 className="relative mt-7 mb-1 text-2xl font-bold z-50">
                  Designa och <br /> Trådskissa
                </h3>
                <p className="relative w-48 text-sm z-50">
                  Designa & Skissa på sidor efter övenskommelse. Vi håller alltid en tät kontakt med
                  kund!
                </p>
                <h2 className="absolute inline-block mt-[-30px] top-0 -right-4 text-[182px] font-bold text-[#FAE3C3] z-40 md:mt-[-60px]">
                  2
                </h2>
              </div>
            </div>
            <div className="absolute flex top-[800px] left-[20px] md:top-[90px] md:left-[600px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">Steg 3</h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h3 className="relative mt-7 mb-1 text-2xl font-bold z-50">
                  Utveckla och <br /> Skapa innehåll
                </h3>
                <p className="relative w-48 text-sm z-50">
                  Utvecklar funktionaliteten för projektet samt skapar design och innehåll.
                </p>
                <h2 className="absolute inline-block mt-[-30px] top-0 -right-8 text-[182px] font-bold text-[#FAE3C3] z-40 md:mt-[-60px]">
                  3
                </h2>
              </div>
            </div>
            <div className="absolute flex top-[1100px] left-[20px] md:top-[20px] md:left-[900px] mt-[-20px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">Steg 4</h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h3 className="relative mt-7 mb-1 text-2xl font-bold z-50">
                  Testa och <br />
                  installera
                </h3>
                <p className="relative w-48 text-sm z-50">
                  Vi testar noga applikation och återkopplar till kund, för att sedan installera &
                  lansera projektet
                </p>
                <h2 className="absolute inline-block mt-[-30px] top-0 right-0 text-[182px] font-bold text-[#FAE3C3] z-40 md:mt-[-60px]">
                  4
                </h2>
              </div>
            </div>
          </div>
        </section>

        <Footer inLanguage={inLanguage} />
      </main>
    </>
  )
}

export default pageExpertis
