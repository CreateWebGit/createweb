'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ButtonQuote from '../ButtonQuote'

//import useStyles from './css';

// npm i @emailjs/browser

const Contact = ({ inLanguage }) => {
  // const classes = useStyles()
  const form = useRef()

  const [emailSent, SetEmailSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_lpsqpvx', 'template_cdx7r3j', form.current, '1QPB-paU_wK0MSKDb').then(
      SetEmailSent(true),
      (result) => {
        console.log(result.text)
        console.log('message sent')
      },
      (error) => {
        console.log(error.text)
      },
    )
  }

  return (
    <>
      {emailSent === false ? (
        <form ref={form} className="">
          <div className="styledInput">
            <input className="" type="text" name="user_name" placeholder=" " required />
            <label className="">{inLanguage === 'sv' ? 'Namn:' : 'Name:'}</label>
            <div className="line"></div>
          </div>
          <div className="styledInput">
            <input className="" type="text" name="user_phone" placeholder=" " required />
            <label className="">{inLanguage === 'sv' ? 'Telefon:' : 'Phone:'}</label>
            <div className=""></div>
          </div>
          <div className="styledInput">
            <input className="" type="email" name="user_email" placeholder=" " required />
            <label className="">{inLanguage === 'sv' ? 'Epost:' : 'Email:'}</label>
            <div className=""></div>
          </div>
          <div className="styledInput">
            <textarea className="" name="message" required />
            <label className="">{inLanguage === 'sv' ? 'Meddelande:' : 'Message:'}</label>
            <div className=""></div>
          </div>
          <div className="mt-8 flex items-end justify-end w-full">
            <ButtonQuote href="/kontakta" background="#f49a11" icon={false} onClick={sendEmail}>
              {inLanguage === 'sv' ? 'Skicka' : 'Send'}
            </ButtonQuote>
          </div>
          {/*
          <div className="">
            <input type="submit" value={inLanguage === 'sv' ? 'Skicka' : 'Send'} />
				  </div>
				  */}
        </form>
      ) : (
        <div className="">Tack</div>
      )}
    </>
  )
}

export default Contact

// Styles
/*
const StyledContactForm = styled.div`
	width: 400px;
	fieldset {
		position: relative;
	}
	form {
		position: relative;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		font-size: 16px;
		input {
			width: 100%;
			height: 35px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
		}

		label {
			color: #999;
			position: absolute;
			top: 0;
			left: 0;
			font-size: 1.2em;
			font-weight: 500;
			-webkit-transition: all 0.15s ease-in-out;
			-moz-transition: all 0.15s ease-in-out;
			transition: all 0.15s ease-in-out;
			pointer-events: none;
		}

		input[type='text']:focus ~ label {
			top: -1.6rem;
			position: absolute;
			font-size: 1em;
			-webkit-transition: all 0.15s ease-in-out;
			-moz-transition: all 0.15s ease-in-out;
			transition: all 0.15s ease-in-out;
		}
		textarea {
			max-width: 100%;
			min-width: 100%;
			width: 100%;
			max-height: 100px;
			min-height: 100px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: 2px solid rgba(0, 206, 158, 1);
			}
		}

		input[type='submit'] {
			margin-top: 2rem;
			cursor: pointer;
			background: rgb(249, 105, 14);
			color: white;
			border: none;
		}
	}
`;
*/
