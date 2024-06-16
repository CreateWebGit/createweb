import Image from 'next/image'

import ButtonQuote from '../ButtonQuote'

import logo from '../../../../public/logo/LogoWhite.png'

//import { UilCalling } from '@iconscout/react-unicons'
//import { UilEnvelopes } from '@iconscout/react-unicons'
//import { UilUsersAlt } from '@iconscout/react-unicons'
//import { UilFacebook } from '@iconscout/react-unicons'
//import { UilLinkedin } from '@iconscout/react-unicons'

const Footer = ({ inLanguage }) => {
  return (
    <div className="-mt-2  bg-[#1B36A3] text-white relative overflow-hidden">
      <div className="footerContainer flex justify-center items-start bg-[#EBF7FE] relative h-[400px]">
        <div className="h-[50px] w-[120px] absolute left-0 bottom-[5px] rotate-[-8deg] md:rotate-[-4deg] bg-[#DFF1FF]"></div>
        <div className="h-[50px] w-[180px] absolute left-[20px] -bottom-4 border border-[#BCE4FF] rotate-[-8deg] md:rotate-[-4deg] "></div>
        <div className="w-1/2 text-black text-center py-12 z-50">
          <h2 className=" text-4xl font-bold mt-12">
            {inLanguage === 'sv'
              ? 'Har du projekt- eller affärsidé?'
              : 'Have a project or business idea? <br /> Push the button to get started!'}
          </h2>
          <p className="mb-8">
            {inLanguage === 'sv'
              ? 'Gå från professionell verksamhet till ett bolag, vi täcker upp dig!'
              : 'From professional business to enterprise, we got you covered!'}
          </p>
          <ButtonQuote background="#f49a11">Begär Offert</ButtonQuote>
        </div>
      </div>
      <div className="w-full md:w-[1200px] m-auto px-4">
        <div className="h-[50px] w-[180px] absolute -right-4 mt-[-140px] rotate-[-8deg] md:rotate-[-4deg] bg-[#00E1FF] z-50"></div>
        <div className="mb-8 mt-8">
          <Image className="m-auto md:m-0" src={logo} width={300} height={80} />
        </div>
        <div className="inline-block md:flex m-auto">
          <div className="flex-grow-[6]">
            <p className="inline-block w-full text-center md:text-left md:w-[500px]">
              {inLanguage === 'sv'
                ? 'Createweb erbjuder professionell webbutveckling för företag i Stockholm och i hela Sverige. Vår erfarna webbutvecklare har kompetens att skapa skräddarsydda lösningar som uppfyller dina specifika behov.'
                : 'Createweb offers professional web development for companies in Stockholm and throughout Sweden. Our experienced web developers have the skills to create customized solutions that meet your specific needs.'}
            </p>
          </div>

          <div className="w-44 my-8 text-center md:flex-grow-[3] block m-auto">
            <h3>{inLanguage === 'sv' ? 'Service' : 'Service'}</h3>
            <h4>{inLanguage === 'sv' ? 'Webbside utveckling' : 'Website Development'}</h4>
            <h4>{inLanguage === 'sv' ? 'E-handel lösningar' : 'E-commerce Development'}</h4>
            <h4>{inLanguage === 'sv' ? 'Apputveckling' : 'Mobile App Development'}</h4>
            <h4>{inLanguage === 'sv' ? 'Sökoptimering (SEO)' : 'Search optimation'}</h4>
          </div>
          <div className=" w-44 text-center block md:flex-grow-[3] m-auto">
            <h3>{inLanguage === 'sv' ? 'Annat' : 'Others'}</h3>
            <h4>{inLanguage === 'sv' ? 'Om oss' : 'About us'}</h4>
          </div>
        </div>
      </div>

      <hr className="hr" />
      <div className="text-center text-xl pb-5">© Copyright 2023 createweb.se</div>
    </div>
  )
}

export default Footer
