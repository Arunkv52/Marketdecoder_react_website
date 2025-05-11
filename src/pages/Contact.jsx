import React from 'react'
import Contactlogo from '../assets/market-logo.jpeg'
import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from 'react-router-dom'

const Contact = () => {
  const onChange = value => {
    console.log('Captcha value:', value)
  }

  return (
    <>
      <div className='contact-page'>
        <div className='contact-us md:flex md:flex-wrap bg-[var(--bg-clr)] text-white]'>
          <div className='w-full md:w-1/2 bg-black p-6 space-y-5 pt-[50px] pb-[95px]'>
            <Link to='/'>
            <img src={Contactlogo} alt='Contact' className='w-[79px]' />
            </Link>
            <p className='text-2xl mt-3'>Enroll now!</p>

            <form action='../send-enquiry.php' method='post' className='space-y-5'>
              <div className='flex gap-4 mb-5'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Enter First Name'
                  className='w-1/2 p-3 border border-gray-500 bg-black placeholder-gray-400'
                  required
                />
                <input
                  type='text'
                  name='lastName'
                  placeholder='Enter Last Name'
                  className='w-1/2 p-3 border border-gray-500 bg-black placeholder-gray-400'
                  required
                />
              </div>
              <div className='mb-5 mt-5'>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Email id'
                  className='w-full p-3 border border-gray-500 bg-black placeholder-gray-400'
                  required
                />
              </div>

              <input
                type='tel'
                name='phone'
                placeholder='Enter Mobile Number'
                className='w-full p-3 border border-gray-500 bg-black placeholder-gray-400'
                required
              />

              <select
                name='course'
                className='w-full p-3 border border-gray-500 bg-black text-white'
                required
              >
                <option disabled selected>
                  Course Offered
                </option>
                <option value='Advanced Price Action'>
                  Advanced Price Action
                </option>
                <option value='Technical Analysis'>Technical Analysis</option>
                <option value='Zone based Trading'>Zone based Trading</option>
                <option value='Gann'>Gann</option>
              </select>

              <ReCAPTCHA
                sitekey='6Le08DQrAAAAAPufPWMdRLP2LqwYyHLmnj-Pwobr'
                onChange={onChange}
              />

              <button
                type='submit'
                className='w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded cursor-pointer'
              >
                Submit
              </button>
            </form>
          </div>

          <div className='w-full md:w-1/2 bg-gradient-to-r from-blue-500 via-blue-500 to-pink-500 flex items-center justify-center pt-5 pb-5'>
            <p className='text-white text-5xl font-semibold pt-5 pb-5'>
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
