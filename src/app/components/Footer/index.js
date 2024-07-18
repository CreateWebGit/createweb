import Image from 'next/image'

import ButtonQuote from '../ButtonQuote'

import logo from '../../../../public/logo/Logo.png'
import Link from 'next/link'

//import { UilCalling } from '@iconscout/react-unicons'
//import { UilEnvelopes } from '@iconscout/react-unicons'
//import { UilUsersAlt } from '@iconscout/react-unicons'
//import { UilFacebook } from '@iconscout/react-unicons'
//import { UilLinkedin } from '@iconscout/react-unicons'

const Footer = ({ inLanguage }) => {
  return (
    <div className="-mt-2  bg-[#1B36A3] text-white relative overflow-hidden">
      <div className="footerContainer flex justify-center items-start bg-[#EBF7FE] relative">
        <div className="h-[50px] w-[120px] absolute left-[-5px] bottom-[2px] rotate-[-18deg] md:rotate-[-4deg] bg-[#DFF1FF]"></div>
        <div className="h-[50px] w-[180px] absolute left-[20px] bottom-[4px] md:bottom-[-15px] border border-[#BCE4FF] rotate-[-18deg] md:rotate-[-4deg] "></div>
        <div className=" text-black text-center pt-32 pb-64 md:py-32 z-50">
          <h2 style={{ whiteSpace: 'pre-line' }} className="text-4xl font-bold">
            {inLanguage === 'sv'
              ? `Har du projekt \n eller en affärsidé?`
              : 'Have a project \n or business idea? '}
          </h2>
          <p style={{ whiteSpace: 'pre-line' }} className="mt-4 mb-8">
            {inLanguage === 'sv'
              ? 'Gå från verksamhet till ett professionelt bolag. \n Vi täcker upp dig!'
              : 'From business to professionell enterprise. \n We got you covered!'}
          </p>
          <ButtonQuote href="/kontakta" background="#f49a11">
            {inLanguage === 'sv' ? 'Begär Offert' : 'Request quotation'}
          </ButtonQuote>
        </div>
      </div>
      <div className="w-full md:w-[1200px] m-auto px-4">
        <div className="h-[50px] w-[180px] absolute -right-4 mt-[-175px] md:mt-[-150px] rotate-[-18deg] sm:rotate-[-8deg] md:rotate-[-4deg] bg-[#00E1FF] z-50"></div>

        <div className="inline-block justify-start items-start mt-4 md:flex m-auto">
          <div className="flex-grow-[6]">
            <div className="mb-8">
              <Image className="m-auto md:m-0" src={logo} width={300} height={200} />
            </div>
            <p className="inline-block w-full text-center text-xl md:text-left md:w-[500px]">
              {inLanguage === 'sv'
                ? 'Createweb erbjuder professionell webbutveckling för företag i Stockholm och i hela Sverige. Vår erfarna webbutvecklare har kompetens att skapa skräddarsydda lösningar som uppfyller dina specifika behov.'
                : 'Createweb offers professional web development for companies in Stockholm and throughout Sweden. Our experienced web developers have the skills to create customized solutions that meet your specific needs.'}
            </p>
          </div>

          <div className="w-44 text-center my-4 md:mt-12 md:text-left md:flex-grow-[3] block m-auto">
            <h3 className="text-2xl  mb-2">{inLanguage === 'sv' ? 'Service' : 'Service'}</h3>
            <h4>{inLanguage === 'sv' ? 'Webbutveckling' : 'Web development'}</h4>
            <h4>{inLanguage === 'sv' ? 'Design & UX' : 'Design & UX'}</h4>
            <h4>{inLanguage === 'sv' ? 'Sökoptimering (SEO)' : 'Search optimation'}</h4>
            <h4>{inLanguage === 'sv' ? 'Digital marknadsföring' : 'Digital marketing'}</h4>
            <h4>{inLanguage === 'sv' ? 'Webb Support' : 'Web Support'}</h4>
          </div>
          <div className="text-center block items-stretch h-full md:mt-12 md:text-left md:flex-grow-[3]">
            <h3 className="text-2xl  mb-2">{inLanguage === 'sv' ? 'Navigering' : 'Navigation'}</h3>

            <Link className="block" href={'/om-oss'}>
              {inLanguage === 'sv' ? 'Om oss' : 'About us'}
            </Link>
            <Link className="block" href={'/expertis'}>
              {inLanguage === 'sv' ? 'Expertis' : 'Expertise'}
            </Link>
            <Link className="block" href={'/kontakta'}>
              {inLanguage === 'sv' ? 'Kontakta oss' : 'Contakt us'}
            </Link>
          </div>
        </div>
      </div>

      <hr className="hr" />
      <div className="text-center text-xl pb-5">© Copyright 2023 createweb.se</div>
    </div>
  )
}

export default Footer
