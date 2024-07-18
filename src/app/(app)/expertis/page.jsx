'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Navbar from '@/app/components/Navbar'

import { GiPencilRuler } from 'react-icons/gi'
import { PiCodeDuotone } from 'react-icons/pi'
import { AiOutlineNotification } from 'react-icons/ai'
import { IoPulseOutline } from 'react-icons/io5'
import { AiOutlineFundView } from 'react-icons/ai'
import { MdSupportAgent } from 'react-icons/md'
import bg from '../../../../public/service/bg1.jpg'
import heroPic from '../../../../public/service/hero.jpg'
import timelinePic from '../../../../public/assets/timeline.png'
import timelinePicMobile from '../../../../public/assets/timelineMobile.png'
import Footer from '@/app/components/Footer'
import { Message_data } from '@/app/context/context'
import Card from '@/app/components/Card'

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

  /*

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

  */

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
        <section>
          <div className="w-full px-4 md:w-[1200px] m-auto">
            <h1 className="text-5xl font-bold py-8">
              {inLanguage === 'sv' ? 'Våra tjänster' : 'Our Services'}
            </h1>
            <p className="w-full md:w-[600px] text-xl">
              {inLanguage === 'sv'
                ? 'Vi bevittnar och stödjer den stora vikten av att bredda sin närvaro på webben. Vi är även bestämt dedikerade till den transparens som krävs för att möta våra kunders unika behov både gällande design och de tekniska bitarna. '
                : 'We witness and support the big importance of expanding your presence on the web. We are also firmly dedicated to the transparency required to meet our customers unique needs, both regarding design and the technical pieces.'}
            </p>
          </div>
          <div className="w-full h-[60vh] my-12 relative">
            <Image
              src={heroPic}
              alt="webbutveckling bakgrund"
              fill={true}
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        </section>
        <section>
          <div className="">
            <div className="w-full px-4 md:w-[800px] m-auto">
              <h4 className="text-[#1B45B4] text-xl">
                {inLanguage === 'sv' ? 'ANSVAR' : 'RESPONSIBILITY'}
              </h4>
              <h2 className="text-3xl mb-4">
                {inLanguage === 'sv'
                  ? 'Vi värdesätter långsiktig partnerskap där vi vidgar och tar ansvar för er digitala närvaro'
                  : 'We value long-term partnerships where we expand and take responsibility for your digital presence'}
              </h2>
              <p className="text-xl">
                {inLanguage === 'sv'
                  ? 'Det krävs ofta flera kuggar i hjulet för att helheten skall bli så optimal som möjligt. Vårt ansvar ligger i att presentera de möjligheter ni har till att växa i framgång på webben.'
                  : 'It often takes several cogs in the wheel for the whole to be as optimal as possible. Our responsibility lies in presenting the opportunities you have to grow in success on the web.'}
              </p>
            </div>
            <div className="hidden flex-wrap items-stretch w-[1200px] m-auto pt-8 md:flex">
              <Card
                icon={
                  <PiCodeDuotone size={36} className="" color={index === 1 ? '#F49A11' : '#000'} />
                }
                title="Webbutveckling"
                titleEng="Web development"
                text="Nästan samtliga av våra sajter är uppbyggda i React, vilket gör att prestanda, sökordsoptimering och säkerhet blir till toppklass. Vi är inte intresserade av något annat än toppklass!"
                textEng="Almost all of our sites are built in React, which means that performance, keyword optimization and security are top class. We are not interested in anything other than top class!"
              />
              <Card
                icon={
                  <GiPencilRuler
                    size={36}
                    className="m-auto"
                    color={index === 1 ? '#F49A11' : '#000'}
                  />
                }
                title="Design och UX"
                titleEng="Design and UX"
                text="Vi förstår vikten av och är bestämt dedikerade till att skräddarsy in i detalj våra kunders design behov, så att de tydligt passar just deras verksamhet och kundkrets."
                textEng="We understand the importance of and are firmly dedicated to tailoring in detail our customers' design needs, so that they clearly fit their business and clientele."
              />

              <Card
                icon={
                  <AiOutlineFundView
                    size={36}
                    className=""
                    color={index === 1 ? '#F49A11' : '#000'}
                  />
                }
                title="Sökordsoptimering"
                titleEng="Keyword optimization"
                text="Fördubbla din förtjänst och stärk upp ditt varumärke genom att klättra upp till topp på Google när dina potentiella kunder söker efter dina tjänster. Vi har professionaliteten för att kunna hjälpa dig dit!"
                textEng="Double your earnings and boost your brand by climbing to the top of Google when your potential customers search for your services. We have the professionalism to help you get there!"
              />
              <Card
                icon={
                  <AiOutlineNotification
                    size={36}
                    className=""
                    color={index === 1 ? '#F49A11' : '#000'}
                  />
                }
                title="Digital marknadsföring"
                titleEng="Digital marketing"
                text="Det är otroligt fördelaktigt att utnyttja de kanaler sociala medier på webben tillhandahåller i marknadsföringssyfte. Vi hjälper till att bygga upp strategier och annonskampanjer så att större folkskara får kännedom om de fantastiska just ni har att erbjuda."
                textEng="It is incredibly beneficial to utilize the channels social media on the web provides for marketing purposes. We help to build strategies and ad campaigns so that larger crowds become aware of the amazing things you have to offer."
              />
              <Card
                icon={
                  <MdSupportAgent size={36} className="" color={index === 1 ? '#F49A11' : '#000'} />
                }
                title="Support"
                titleEng="Support"
                text="Vi värdesätter ett tryggt och långsiktigt samarbete med våra kunder. Supportavtal brukar vara populärt där vi ser till att eran webbplats fungerar optimalt över tid. Vi hjälper även till att hålla innehållet på er webbplats i aktiv rörelse, uppdaterar bilder och texter m.m efter överenskommelse."
                textEng="We value secure and long-term cooperation with our customers. Support agreements are usually popular where we ensure that your website functions optimally over time. We also help keep the content on your website in active motion, update images and texts, etc. by agreement."
              />
            </div>

            <div className=" md:hidden">
              <div className=" overscroll-x-contain overflow-x-scroll overflow-y-hidden flex m-auto snap-mandatory snap-x  py-8">
                <Card
                  icon={
                    <PiCodeDuotone
                      size={36}
                      className=""
                      color={index === 1 ? '#F49A11' : '#000'}
                    />
                  }
                  title="Webbutveckling"
                  titleEng="Web development"
                  text="Nästan samtliga av våra sajter är uppbyggda i React, vilket gör att prestanda, sökordsoptimering och säkerhet blir till toppklass. Vi är inte intresserade av något annat än toppklass!"
                  textEng="Almost all of our sites are built in React, which means that performance, keyword optimization and security are top class. We are not interested in anything other than top class!"
                />
                <Card
                  icon={
                    <GiPencilRuler
                      size={36}
                      className="m-auto"
                      color={index === 1 ? '#F49A11' : '#000'}
                    />
                  }
                  title="Design och UX"
                  titleEng="Design and UX"
                  text="Vi förstår vikten av och är bestämt dedikerade till att skräddarsy in i detalj våra kunders design behov, så att de tydligt passar just deras verksamhet och kundkrets."
                  textEng="We understand the importance of and are firmly dedicated to tailoring in detail our customers' design needs, so that they clearly fit their business and clientele."
                />

                <Card
                  icon={
                    <AiOutlineFundView
                      size={36}
                      className=""
                      color={index === 1 ? '#F49A11' : '#000'}
                    />
                  }
                  title="Sökordsoptimering"
                  titleEng="Keyword optimization"
                  text="Fördubbla din förtjänst och stärk upp ditt varumärke genom att klättra upp till topp på Google när dina potentiella kunder söker efter dina tjänster. Vi har professionaliteten för att kunna hjälpa dig dit!"
                  textEng="Double your earnings and boost your brand by climbing to the top of Google when your potential customers search for your services. We have the professionalism to help you get there!"
                />
                <Card
                  icon={
                    <AiOutlineNotification
                      size={36}
                      className=""
                      color={index === 1 ? '#F49A11' : '#000'}
                    />
                  }
                  title="Digital marknadsföring"
                  titleEng="Digital marketing"
                  text="Det är otroligt fördelaktigt att utnyttja de kanaler sociala medier på webben tillhandahåller i marknadsföringssyfte. Vi hjälper till att bygga upp strategier och annonskampanjer så att större folkskara får kännedom om de fantastiska just ni har att erbjuda."
                  textEng="It is incredibly beneficial to utilize the channels social media on the web provides for marketing purposes. We help to build strategies and ad campaigns so that larger crowds become aware of the amazing things you have to offer."
                />
                <Card
                  icon={
                    <MdSupportAgent
                      size={36}
                      className=""
                      color={index === 1 ? '#F49A11' : '#000'}
                    />
                  }
                  title="Support"
                  titleEng="Support"
                  text="Vi värdesätter ett tryggt och långsiktigt samarbete med våra kunder. Supportavtal brukar vara populärt där vi ser till att eran webbplats fungerar optimalt över tid. Vi hjälper även till att hålla innehållet på er webbplats i aktiv rörelse, uppdaterar bilder och texter m.m efter överenskommelse."
                  textEng="We value secure and long-term cooperation with our customers. Support agreements are usually popular where we ensure that your website functions optimally over time. We also help keep the content on your website in active motion, update images and texts, etc. by agreement."
                />
                {/*
                <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                  <h2 className="text-center w-[80vw] text-2xl my-4">
                    {inLanguage === 'sv' ? 'Webbdesign' : 'Web design'}
                  </h2>
                  <p className="text-xl">
                    {inLanguage === 'sv'
                      ? 'Vi förstår vikten utav och är bestämt dedikerade till att skräddarsy in i detalj våra kunders webbdesign, så att de tydligt passar just deras verksamhet.och kundkrets.'
                      : 'We understand the importance of and are firmly dedicated to tailoring in detail our customers web designs, so that they clearly fit their business and clientele.'}
                  </p>
                </div>
                <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                  <h2 className="text-center w-[80vw] text-2xl my-4">
                    {inLanguage === 'sv' ? 'Webbutveckling' : 'Web development'}
                  </h2>
                  <p className="text-xl">
                    {inLanguage === 'sv'
                      ? 'Tekniskt sett är de viktigt för oss att kunna i första hand erbjuda webbapplikation, bokningssystem, e - handel m.m som är byggd av oss från grunden. Vi lutar oss ogärna mot tredje parts lösningar. Vi anser att det blir sällan kostnadseffektivt i längden. Nästan samtliga av våra sajter är uppbyggda i React, vilket gör att dessa webbsidor prestandamässigt och säkerhetsmässigt till toppklass sidor. Dessutom är de bästa utgångsläget gällande sökordsoptimering.'
                      : 'Technically speaking, it is important for us to be able to primarily offer a web application, booking system, e-commerce, etc. that is built by us from the ground up. We are reluctant to lean on third-party solutions. We believe that it is rarely cost-effective in the long run. Almost all of our sites are built in React, which makes these web pages top-class in terms of performance and security. In addition, they are the best starting point for keyword optimization.'}
                  </p>
                </div>
                <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                  <h2 className="text-center w-[80vw] text-2xl my-4">
                    {inLanguage === 'sv' ? 'Marknadsföring' : 'Marketing'}
                  </h2>
                  <p className="text-xl">
                    {inLanguage === 'sv'
                      ? 'Att marknadsföra sig på webben är minst lika viktigt som att ha en professionell webbapplikation! Vi har god erfarenhet och är professionella inom sökordsoptimering och annonsering, samt bygga upp varumärke kring de olika kanaler inom sociala medier.'
                      : 'Marketing yourself on the web is at least as important as having a professional web application! We have good experience and are professionals in keyword optimization and advertising, as well as building a brand around the various channels within social media.'}
                  </p>
                </div>
                <div className="bg-white myShadowMobile my-4 mx-4 px-4 h-[70vh] snap-center">
                  <h2 className="text-center w-[80vw] text-2xl my-4">
                    {inLanguage === 'sv' ? 'Support' : 'Support'}
                  </h2>
                  <p className="text-xl">
                    {inLanguage === 'sv'
                      ? 'Ett av de främsta målen vi har är ett tryggt och långsiktigt samarbete med våra kunder. Supportavtal brukar vara populärt där vi ser till att eran webbplats fungerar optimalt över tid. Det kan också innefatta att vi är behjälpliga på eran webbplats. Där vi hjälper till att hålla webbsidans innehåll i aktiv rörelse, uppdaterar bilder och texter m.m efter överenskommelse.'
                      : 'One of the main goals we have is a safe and long-term collaboration with our customers. Support agreements are usually popular where we ensure that your website functions optimally over time. It may also include us being helpful on your website. Where we help keep the websites content in active motion, update images and texts, etc. as agreed.'}
                  </p>
                </div>
                */}
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          {/* 
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
                    <h2 className="text-center text-2xl">
                      {inLanguage === 'sv' ? 'Webbdesign' : 'Web design'}
                    </h2>
                    <GiPencilRuler
                      size={46}
                      className="m-auto"
                      color={index === 0 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">
                      {inLanguage === 'sv'
                        ? 'Det är detaljerna som räknas'
                        : 'It is the details that count'}
                    </p>
                  </div>
                  <div
                    onClick={() => handleClick(1)}
                    className="flex flex-col justify-between flex-grow bg-white cursor-pointer rounded-md w-[220px] py-4 my-4 mr-8 shadow-md"
                  >
                    <h2 className="text-center text-2xl">
                      {inLanguage === 'sv' ? 'Webbutveckling' : 'Web development'}
                    </h2>
                    <PiCodeDuotone
                      size={46}
                      className="m-auto"
                      color={index === 1 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">
                      {inLanguage === 'sv'
                        ? 'Skräddarsytt & Inavativa lösningar'
                        : 'Tailor-made & Innovative solutions'}
                    </p>
                  </div>
                </div>
                <div className="flex h-1/2">
                  <div
                    onClick={() => handleClick(2)}
                    className="flex flex-col justify-between flex-grow bg-white cursor-pointer rounded-md w-[220px] py-4 my-4 mr-8 shadow-md"
                  >
                    <h2 className="text-center text-2xl">
                      {inLanguage === 'sv' ? 'Marknadsföring' : 'Marketing'}
                    </h2>
                    <IoPulseOutline
                      size={46}
                      className="m-auto"
                      color={index === 2 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">
                      {inLanguage === 'sv'
                        ? 'Vi ser till att du står i centrum'
                        : 'We make sure that you are at the center'}
                    </p>
                  </div>
                  <div
                    onClick={() => handleClick(3)}
                    className="flex flex-col justify-between flex-grow bg-white cursor-pointer rounded-md w-[220px] py-4 my-4 mr-8 shadow-md"
                  >
                    <h2 className="text-center text-2xl">
                      {inLanguage === 'sv' ? 'Support' : 'Support'}
                    </h2>
                    <MdSupportAgent
                      size={46}
                      className="m-auto"
                      color={index === 3 ? '#F49A11' : '#000'}
                    />
                    <p className="text-center mx-2">
                      {inLanguage === 'sv'
                        ? 'Vi bygger långsiktiga relationer'
                        : 'We build long-term relationships'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-grow-1 flex flex-col  my-4 px-4 w-full border bg-white/50">
                {index === 0 ? (
                  <h2 className="text-2xl text-center py-8">
                    {inLanguage === 'sv' ? 'Webbdesign' : 'Web design'}
                  </h2>
                ) : (
                  ''
                )}
                <p className="text-xl">
                  {index === 0
                    ? inLanguage === 'sv'
                      ? 'Vi förstår vikten utav och är bestämt dedikerade till att skräddarsy in i detalj våra kunders webbdesign, så att de tydligt passar just deras verksamhet.och kundkrets.'
                      : 'We understand the importance of and are firmly dedicated to tailoring in detail our customers web designs, so that they clearly fit their business and clientele.'
                    : ''}
                </p>

                {index === 1 ? (
                  <h2 className="text-2xl text-center py-8">
                    {inLanguage === 'sv' ? 'Webbutveckling' : 'Web development'}
                  </h2>
                ) : (
                  ''
                )}
                <p className="text-xl">
                  {index === 1
                    ? inLanguage === 'sv'
                      ? 'Tekniskt sett är de viktigt för oss att kunna i första hand erbjuda webbapplikation, bokningssystem, e - handel m.m som är byggd av oss från grunden. Vi lutar oss ogärna mot tredje parts lösningar. Vi anser att det blir sällan kostnadseffektivt i längden. Nästan samtliga av våra sajter är uppbyggda i React, vilket gör att dessa webbsidor prestandamässigt och säkerhetsmässigt till toppklass sidor. Dessutom är de bästa utgångsläget gällande sökordsoptimering.'
                      : 'Technically speaking, it is important for us to be able to primarily offer a web application, booking system, e-commerce, etc. that is built by us from the ground up. We are reluctant to lean on third-party solutions. We believe that it is rarely cost-effective in the long run. Almost all of our sites are built in React, which makes these web pages top-class in terms of performance and security. In addition, they are the best starting point for keyword optimization.'
                    : ''}
                </p>

                {index === 2 ? (
                  <h2 className="text-2xl text-center py-8">
                    {inLanguage === 'sv' ? 'Marknadsföring' : 'Marketing'}
                  </h2>
                ) : (
                  ''
                )}
                <p className="text-xl">
                  {index === 2
                    ? inLanguage === 'sv'
                      ? 'Att marknadsföra sig på webben är minst lika viktigt som att ha en professionell webbapplikation! Vi har god erfarenhet och är professionella inom sökordsoptimering och annonsering, samt bygga upp varumärke kring de olika kanaler inom sociala medier.'
                      : 'Marketing yourself on the web is at least as important as having a professional web application! We have good experience and are professionals in keyword optimization and advertising, as well as building a brand around the various channels within social media.'
                    : ''}
                </p>

                {index === 3 ? (
                  <h2 className="text-2xl text-center py-8">
                    {inLanguage === 'sv' ? 'Support' : 'Support'}
                  </h2>
                ) : (
                  ''
                )}
                <p className="text-xl">
                  {index === 3
                    ? inLanguage === 'sv'
                      ? 'Ett av de främsta målen vi har är ett tryggt och långsiktigt samarbete med våra kunder. Supportavtal brukar vara populärt där vi ser till att eran webbplats fungerar optimalt över tid. Det kan också innefatta att vi är behjälpliga på eran webbplats. Där vi hjälper till att hålla webbsidans innehåll i aktiv rörelse, uppdaterar bilder och texter m.m efter överenskommelse.'
                      : 'One of the main goals we have is a safe and long-term collaboration with our customers. Support agreements are usually popular where we ensure that your website functions optimally over time. It may also include us being helpful on your website. Where we help keep the websites content in active motion, update images and texts, etc. as agreed.'
                    : ''}
                </p>
              </div>
            </div>
          </div>
          */}
        </section>
        <section className="relative w-full h-[1296px] md:h-[500px] my-24">
          <div className="absolute h-[1296px] py-5 px-12 md:py-0 md:px-0 md:left-1/2 md:ml-[-500px] md:w-[1000px] md:h-auto">
            <Image className="absolute w-full h-auto m-auto hidden md:block" src={timelinePic} />
            <Image
              className="absolute h-[1096px] bottom-20 m-auto md:hidden"
              src={timelinePicMobile}
            />
            <h4 className="text-[#1B45B4] text-xl">
              {inLanguage === 'sv' ? 'PROCESS' : 'PROCESS'}
            </h4>
            <h2 className="text-3xl">
              {inLanguage === 'sv' ? 'Här är vår arbetsprocess' : 'Here is our work process'}
            </h2>
            <div className="absolute flex top-[200px] left-[20px] md:top-[250px] md:left-[30px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">
                {inLanguage === 'sv' ? 'Steg 1' : 'Step 1'}
              </h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h3
                  style={{ whiteSpace: 'pre-line' }}
                  className="relative mt-7 mb-1 text-2xl font-bold z-50"
                >
                  {inLanguage === 'sv'
                    ? 'Planera och \n Möta kund'
                    : 'Plan and \n Meet the customer'}
                </h3>
                <p className="relative w-48 text-sm z-50">
                  {inLanguage === 'sv'
                    ? 'Definiera projektets mål och målsättningar. Sammanställa Kravspecifikation från intressenter och kunder.'
                    : 'Define the projects goals and objectives. Compile requirements specification from stakeholders and customers.'}
                </p>
                <h2 className="absolute inline-block mt-[-30px] top-0 right-0 text-[182px] font-bold text-[#FAE3C3] z-40 md:mt-[-60px]">
                  1
                </h2>
              </div>
            </div>
            <div className="absolute flex top-[500px] left-[20px] md:top-[90px] md:left-[250px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">
                {inLanguage === 'sv' ? 'Steg 2' : 'Step 2'}
              </h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h3
                  style={{ whiteSpace: 'pre-line' }}
                  className="relative mt-7 mb-1 text-2xl font-bold z-50"
                >
                  {inLanguage === 'sv' ? 'Designa och \n Skissa' : 'Design and \n Sketch'}
                </h3>
                <p className="relative w-48 text-sm z-50">
                  {inLanguage === 'sv'
                    ? 'Designa & Skissa på sidor efter övenskommelse. Vi håller alltid en tät kontakt med dig som kund!'
                    : 'Design & Sketch pages as agreed. We always keep in close contact with you as a customer!'}
                </p>
                <h2 className="absolute inline-block mt-[-30px] top-0 -right-4 text-[182px] font-bold text-[#FAE3C3] z-40 md:mt-[-60px]">
                  2
                </h2>
              </div>
            </div>
            <div className="absolute flex top-[800px] left-[20px] md:top-[90px] md:left-[600px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">
                {inLanguage === 'sv' ? 'Steg 3' : 'Step 3'}
              </h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h3
                  style={{ whiteSpace: 'pre-line' }}
                  className="relative mt-7 mb-1 text-2xl font-bold z-50"
                >
                  {inLanguage === 'sv'
                    ? 'Utveckla och \n Skapa innehåll'
                    : 'Develop and \n Create content'}
                </h3>
                <p className="relative w-48 text-sm z-50">
                  {inLanguage === 'sv'
                    ? 'Utvecklar projektets funktionalitet, samt skapar design och innehåll.'
                    : 'Develops the projects functionality, as well as creates design and content.'}
                </p>
                <h2 className="absolute inline-block mt-[-30px] top-0 -right-8 text-[182px] font-bold text-[#FAE3C3] z-40 md:mt-[-60px]">
                  3
                </h2>
              </div>
            </div>
            <div className="absolute flex top-[1100px] left-[20px] md:top-[20px] md:left-[900px] mt-[-20px] md:block">
              <h3 className="hidden relative mt-8 mb-1 text-2xl z-50 md:block">
                {inLanguage === 'sv' ? 'Steg 4' : 'Step 4'}
              </h3>
              <div className="w-[65px] h-[65px] border border-[#FFCF85] rounded-full bg-white flex justify-center items-center">
                <div className="w-[21px] h-[21px] bg-[#F5A42A] rounded-full"></div>
              </div>
              <div className="w-56 -top-6 relative z-50 ml-4 md:ml-0">
                <h3
                  style={{ whiteSpace: 'pre-line' }}
                  className="relative mt-7 mb-1 text-2xl font-bold z-50"
                >
                  {inLanguage === 'sv' ? 'Testa och \n Installera' : 'Test and \n Install'}
                </h3>
                <p className="relative w-48 text-sm z-50">
                  {inLanguage === 'sv'
                    ? 'Vi testar noga applikation och återkopplar till kund, för att sedan installera & lansera projektet'
                    : 'We carefully test the application and give feedback to the customer, then install & launch the project'}
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
