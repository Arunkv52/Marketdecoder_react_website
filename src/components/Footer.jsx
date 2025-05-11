import React from 'react'
import Logo from '../assets/market-logo.jpeg'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faSquareInstagram,
  faSquareXTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className='pt-5 pb-5'>
        <div className='top-footer md:max-w-[1320px] mx-auto flex align-top flex-wrap p-5 gap-5 md:gap-10'>
          <div className='footer-1 md:w-1/3'>
            <img src={Logo} alt='' width='100px' />
            <p className='pt-5 text-[14px] md:text-[16px]'>
              By the end of this comprehensive point trading course,
              participants will have the knowledge and skills to navigate the
              dynamic world of point trading with confidence and precision.
            </p>
          </div>
          <div className='footer-2 md:w-1/4'>
            <h2 className='pb-2 text-[18px] md:text-[20px]'>
              <strong>Products</strong>
            </h2>
            <ul className='text-[14px] md:text-[16px]'>
              <a href="#Courses"><li className='pb-2'>Courses</li></a>
              <a href="#Instructors"><li className='pb-2'>Instructors</li></a>
              <Link to="/contact" className='pb-2'>Contact us</Link>
            </ul>
          </div>
          <div className='footer-3 Md:w-1/5'>
            <h2 className='pb-2 text-[18px] md:text-[20px]'>
              <strong>Enroll</strong>
            </h2>
            <ul className='text-[14px] md:text-[16px]'>
              <Link to='https://www.youtube.com/@MARKETDECODER'>
              <li>View our channel</li>
              </Link>
            </ul>
          </div>
          <div className='footer-4 md:w-1/5 flex justify-end'>
            <div className='btn-footer'>
              <Link to='https://com.rpy.club/pdp/Prooptionselling'>
              <h6 className='bg-[var(--yellow)] p-3 rounded-[5px] text-center text-black font-bold w-40 text-[14px] md:text-[16px]'>
                Register now
              </h6>
              </Link>
            </div>
          </div>
        </div>
        <div className='below-footer md:max-w-[1320px] mx-auto flex justify-content-between align-top flex-wrap p-5 gap-5 md:gap-0 mt-5'>
          <div className='md:w-1/2'>
            <p className='text-[14px]'>
              © 2025 - Alrights reserved by Market Decoder
            </p>
          </div>
          <div className='md:w-1/4'>
            <Link to='#' className='font-semibold hover:text-gray-300'>
              <p className='text-[14px]'>Privacy Policy</p>
            </Link>
          </div>
          <div className='md:w-1/4 flex justify-end gap-5'>
           <Link to='https://www.facebook.com/marketdecoder/'>
            <FontAwesomeIcon icon={faFacebook} style={{ color: '#0866FF' }} />
            </Link>
            <Link to='https://www.instagram.com/trading.couples/'>
            <FontAwesomeIcon
              icon={faSquareInstagram}
              style={{ color: '#E100E0' }}
            />
            </Link>
            <Link to='https://x.com/nagarajanm0311?lang=en'>
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              style={{ color: '#015050' }}
            />
            </Link>
            <Link to='https://www.youtube.com/@MARKETDECODER'>
            <FontAwesomeIcon icon={faYoutube} style={{ color: '#FD0000' }} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
