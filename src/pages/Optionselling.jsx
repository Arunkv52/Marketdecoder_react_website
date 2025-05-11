import React from 'react'
import option from '../assets/option-selling.webp'
import Logo from '../assets/market-logo.jpeg'
import { Link } from 'react-router-dom'

const Optionselling = () => {
  return (
    <>
      <div className='optionsell-all md:max-w-[1320px] mx-auto'>
        <div className='head-item flex justify-between items-center md:flex md:justify-between md:items-center'>
          <div className='top-logo p-5'>
            <Link to='/'>
              <img src={Logo} alt='' className='w-[89px]' />
            </Link>
          </div>
          <div className='top-logo-list'>
            <Link to='/'>
              <p className='font-semibold'>Home</p>
            </Link>
          </div>
        </div>

        <div className='option-sell md:flex md:flex-wrap p-5'>
          <div className='md:w-1/2'>
            <img src={option} alt='' className='w-[100%] h-[40%] object-cover md:w-full md:h-[100%] md:object-cover' />
          </div>
          <div className='md:w-1/2 p-5'>
            <h5 className='md:text-3xl text-2xl mb-4'>PRO Advanced Option Selling</h5>
            <ul className='list-disc p-2'>
              <li>Basic concepts of Call Option &amp; Put Option</li>
              <li>Option History &amp; Terminology</li>
              <li>Pay off graph</li>
              <li>Call Option sell</li>
              <li>Break Even point Call Option</li>
              <li>Put buy introduction</li>
              <li>Put Option sell</li>
              <li>Break even point of Put Option buy Sell</li>
              <li>Option Types as per Intrinsic Value</li>
              <li>Difference between Call buy &amp; Put sell</li>
            </ul>
            <Link to='https://com.rpy.club/pdp/Prooptionselling'>
              <p className='text-[var(--yellow)] mt-5 hover:underline font-semibold cursor-pointer'>
                Register Now
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Optionselling
