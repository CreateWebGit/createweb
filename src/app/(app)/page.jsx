'use client'
import React, { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Message_data } from '../context/context'
import { cn } from '@/utils/utils'

import Navbar from '../components/Navbar'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

import profilePic from '../../../public/assets/HeroComputor1111111.png'
import iconLandingpage from '../../../public/assets/iconLandingpage.png'
import iconCMS from '../../../public/assets/iconCMS.png'
import iconDevelopment from '../../../public/assets/iconDevelopment.png'
import patternDark from '../../../public/assets/PaternDark.png'
import patternLight from '../../../public/assets/PaternLight.png'
import brandNextJS from '../../../public/assets/brandNextjs.png'
import brandReact from '../../../public/assets/brandReact.svg'
import brandPayload from '../../../public/assets/brandPayloadcms.svg'
import heroComputor from '../../../public/assets/HeroComputor.webp'
import aboutImage from '../../../public/assets/aboutPic.jpg'
import timelinePic from '../../../public/assets/timeline.png'
import timelinePicMobile from '../../../public/assets/timelineMobile.png'
import ButtonQuote from '../components/ButtonQuote'

//import Timeline from '../components/Timeline'
//import { useScrollInfo } from '@faceless-ui/scroll-info'

export default function Home() {
  const { inLanguage } = useContext(Message_data)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="some text" />
      </Head>

      <Navbar white={false} />

      <div className="heroContainer pt-[100px] px-4 md:pt-[200px] h-[110vh] md:h-[90vh] z-50">
        <div className="block flex-row-reverse md:flex">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl text-center md:text-6xl md:text-left font-bold text-white">
              {inLanguage === 'sv' ? (
                <>
                  Lås upp kraften av <br />
                  <span className="text-[#F49B11]">Webbutveckling</span>
                </>
              ) : (
                <>
                  Unlock the Power of <br />
                  <span className="text-[#F49B11]">Web Development</span>
                </>
              )}
            </h1>

            <div className="hidden md:block w-[450px]">
              <h2 className="text-xl my-4 text-left md:text-2xl text-white">
                {inLanguage === 'sv'
                  ? 'Skapa banbrytande digitala upplevelser'
                  : 'Crafting Cutting-Edge Digital Experiences'}
              </h2>
              <p className="text-white">
                {inLanguage === 'sv'
                  ? 'Createweb erbjuder professionell webbutveckling för företag i Stockholm och i hela Sverige. Vår erfarna webbutvecklare har kompetens att skapa skräddarsydda lösningar som uppfyller dina specifika behov.'
                  : 'Createweb offers professional web development for companies in Stockholm and throughout Sweden. Our experienced web developers have the skills to create customized solutions that meet your specific needs.'}
              </p>
              <div className="flex justify-end w-full gap-4 mt-4">
                <ButtonQuote href="/kontakta" background="#f49a11">
                  Kontakta
                </ButtonQuote>
                <ButtonQuote href="/om-oss" background="transparent">
                  Om Oss
                </ButtonQuote>

                {/*
                <Link
                  href={'/kontakta'}
                  className="block bg-orange-600 rounded-md shadow-xl text-white cursor-pointer text-sm m-1 py-2 px-3 text-center"
                >
                  Kontakta
                </Link>

                <Link
                  href={'/om-oss'}
                  className=" bg-transparent border rounded-md shadow-xl text-white cursor-pointer text-sm m-1 py-2 px-3 text-center"
                >
                  Om oss
                </Link>
                */}
              </div>
            </div>
          </div>
          <div className="relative w-full h-96 md:hidden">
            <Image
              src={profilePic}
              alt="Computor"
              fill={true}
              objectFit="contain"
              className=" md:mt-[-200px] z-50"
              priority
            />
          </div>
          <div className="block md:hidden">
            <h2 className="text-xl my-4 text-center md:text-2xl text-white">
              {inLanguage === 'sv'
                ? 'Skapa banbrytande digitala upplevelser'
                : 'Crafting Cutting-Edge Digital Experiences'}
            </h2>
            <p className="text-white pt-4 pb-6">
              {inLanguage === 'sv'
                ? 'Createweb erbjuder professionell webbutveckling för företag i Stockholm och i hela Sverige. Vår erfarna webbutvecklare har kompetens att skapa skräddarsydda lösningar som uppfyller dina specifika behov.'
                : 'Createweb offers professional web development for companies in Stockholm and throughout Sweden. Our experienced web developers have the skills to create customized solutions that meet your specific needs.'}
            </p>
            <div className="block">
              <Link
                href={'/kontakta'}
                className="bg-gradient-to-r from-[#9F3CD7] to-[#BC47DD] rounded-md shadow-xl text-white cursor-pointer text-sm m-1 py-2 px-3 text-center"
              >
                Kontakta
              </Link>

              <Link
                href={'/om-oss'}
                className=" bg-transparent border rounded-md shadow-xl text-white cursor-pointer text-sm m-1 py-2 px-3 text-center"
              >
                Om oss
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'hidden animatePic absolute mt-[-540px] w-full h-96 md:block md:w-1/2 md:h-screen z-50',
        )}
      >
        <Image
          src={profilePic}
          alt="Computor"
          fill={true}
          objectFit="contain"
          className=" md:mt-[-100px] z-50"
          priority
        />
      </div>

      <main className=" z-0">
        <section className="relative w-full flex flex-col justify-center items-center z-40 my-5">
          <Image className="absolute left-0 mt-[-50px] ml-[-150px] md:ml-0" src={patternDark} />
          <Image className="absolute left-0 ml-[-150px] md:ml-0" src={patternLight} />
          {inLanguage === 'sv' ? (
            <h2>Teknologi & Plattform vi föredrar</h2>
          ) : (
            <h2>Technology & Platform we prefer</h2>
          )}

          <div className="flex justify-center items-center h-10 m-0 p-0 z-50">
            <Link href="https://nextjs.org" target="_blank">
              <div className="flex flex-row justify-center items-center mx-3 md:mx-5 bg-white shadow-md z-50 p-2">
                <Image src={brandNextJS} width={25} />
                <span className="ml-1">Next JS</span>
              </div>
            </Link>
            <Link href="https://react.dev" target="_blank">
              <div className="flex flex-row justify-center items-center mx-3 md:mx-5 bg-white shadow-md z-50 p-2">
                <Image src={brandReact} />
                <span className="ml-1">React</span>
              </div>
            </Link>
            <Link href="https://payloadcms.com" target="_blank">
              <div className="flex flex-row justify-center items-center mx-3 md:mx-5 bg-white shadow-md z-50 p-2">
                <Image src={brandPayload} />
                <span className="ml-1">PayloadCMS</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white">
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
                  <div className="absolute top-0 left-0 border-l-8 border-double border-t-8 border-l-[#f49a11] border-t-[#f49a11] rounded-tl-lg h-[200px] w-[200px]" />
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
                <div className="flex flex-col justify-end items-end my-4 w-full">
                  <ButtonQuote href="/om-oss" background="#f49a11">
                    Läs mer
                  </ButtonQuote>
                  {/*
                  <Link
                    href={'/om-oss'}
                    className=" inline-block bg-orange-600 rounded-md shadow-xl text-white cursor-pointer text-sm m-1 py-2 px-3 text-center"
                  >
                    Läs mer
                  </Link>
                  */}
                </div>
              </div>
            </div>

            <div className="hidden relative justify-center items-center bg-[#F49B11] w-[88%] top-[-55px] left-[50%] ml-[-44%] md:ml-[-44%] py-5 px-4 rounded-md text-2xl text-white text-center z-50 md:flex">
              {inLanguage === 'sv'
                ? '“Vi har en passion i att få leverera högkvalitativt och användarvänligt teknik för att hjälpa våra kunder att nå sina mål”'
                : '“We have a passion for delivering high-quality and user-friendly technology to help our customers achieve their goals”'}
            </div>
          </div>
        </section>

        <section className="w-full px-4 py-12 bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(248,248,248,1)]">
          <div className="w-full md:w-[1200px] m-auto">
            <h3 className="text-xl text-[#1B45B4]">TJÄNSTER</h3>
            <h2 className="text-2xl mb-5">Vi är hängivna till den bästa webbupplevelsen</h2>
            <div className="block md:flex gap-8 justify-between">
              <div className="h-[250px] rounded-lg text-center text-white p-12 mb-8 md:mb-0 bg-[#1C2C99]">
                <Image src={iconDevelopment} className="m-auto" />
                <h3 className="text-xl mt-1">
                  {inLanguage === 'sv' ? 'Webbutveckling' : 'Webdevelopment'}
                </h3>
                <p>
                  {inLanguage === 'sv'
                    ? 'Skapar bästa webbuplevelsen, med högt kompetenta utvecklare och designer, för individer och företag'
                    : 'Provide best website design and development layouts with advanced plugins, frameworks, and multiple variant themes.'}
                </p>
              </div>

              <div className="h-[250px] rounded-lg text-center text-slate-700 p-12 mb-8 md:mb-0 bg-white">
                <Image src={iconCMS} className="m-auto" />
                <h3 className="text-xl mt-1">CMS</h3>
                <p>
                  {inLanguage == 'sv'
                    ? 'Effektivisera din process gällande innehållshantering med vårat robusta CMS, skräddarsytt för att möta just dina unika affärsbehov.'
                    : 'Streamline your content management process with our robust CMS, tailored to meet your unique business needs.'}
                </p>
              </div>

              <div className="h-[250px] rounded-lg text-center text-slate-700 p-12  bg-white">
                <Image src={iconLandingpage} className="m-auto" />
                <h3 className="text-xl mt-1">
                  {inLanguage === 'sv' ? 'Sökordsoptimering' : 'Search Engine Optimization'}
                </h3>
                <p>
                  {inLanguage == 'sv'
                    ? 'Se till att komma toprankad bland sökord som gynnar just din veksamhet på Google med hjälp av sökordsoptimering'
                    : 'Make sure to get top ranking among keywords that benefit your activity on Google with search engine optimisation'}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#EAF7FE] py-12 px-2">
          <div className="flex flex-col-reverse md:flex md:flex-row md:w-[1200px] m-auto">
            <div className="w-full md:w-1/2 pr-8">
              <div className="hidden md:block">
                <h3 className="text-xl text-[#1B45B4]">
                  {inLanguage === 'sv' ? 'OM OSS' : 'ABOUT US'}
                </h3>
                <h2 className="text-2xl">
                  {inLanguage === 'sv' ? 'Varför vill du väljer du oss?' : 'Wy Choose Us?'}
                </h2>
                <p>
                  {inLanguage === 'sv'
                    ? 'Vad som gör oss unika!'
                    : 'What make us distinguished from others!'}
                </p>
              </div>

              <Accordion inLanguage={inLanguage} />
            </div>

            <div className="w-full md:w-1/2">
              <div className="hidden">
                <h2>{inLanguage === 'sv' ? 'Varför vill du väljer du oss?' : 'Wy Choose Us?'}</h2>
                <p>
                  {inLanguage === 'sv'
                    ? 'Vad som gör oss unika!'
                    : 'What make us distinguished from others!'}
                </p>
              </div>

              <div className="relative">
                <div className="block mb-8 md:hidden">
                  <h3 className="text-xl text-[#1B45B4]">
                    {inLanguage === 'sv' ? 'OM OSS' : 'ABOUT US'}
                  </h3>
                  <h2 className="text-2xl">
                    {inLanguage === 'sv' ? 'Varför vill du väljer du oss?' : 'Wy Choose Us?'}
                  </h2>
                  <p>
                    {inLanguage === 'sv'
                      ? 'Vad som gör oss unika!'
                      : 'What make us distinguished from others!'}
                  </p>
                </div>
                <div className="relative h-[40vh] z-50 flex flex-row pt-4 items-end justify-start md:flex md:flex-row md:pt-0 md:h-[80vh]">
                  <div className="absolute top-0 right-0 border-r-8 border-double border-t-8 border-r-[#F49B11] border-t-[#F49B11] rounded-tr-lg h-[300px] w-[300px]" />
                  <div className="relative h-full mx-4 w-full md:h-[96%] md:w-[96%] md:mx-0">
                    <Image
                      src="/assets/whyuspic1.png"
                      alt="Computor"
                      fill={true}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
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
