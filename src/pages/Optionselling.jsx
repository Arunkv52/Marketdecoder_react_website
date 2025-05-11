import React from 'react'
import option from '../assets/option-selling.webp'
import Logo from '../assets/market-logo.jpeg'
import { Link } from 'react-router-dom'

const Optionselling = () => {
  return (
    <>
      <div className='optionsell-all w-[1320px] mx-auto'>
        <div className='head-item md:flex md:justify-between md:items-center'>
          <div className='top-logo pt-3 pb-3'>
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

        <div className='option-sell md:flex md:flex-wrap'>
          <div className='w-1/2'>
            <img src={option} alt='' />
          </div>
          <div className='w-1/2'>
            <h5 className='text-3xl mb-4'>PRO Advanced Option Selling</h5>
            <ul className='list-disc p-3'>
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
