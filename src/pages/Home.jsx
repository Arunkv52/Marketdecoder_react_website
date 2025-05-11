import React from 'react'
import Header from '../components/Header'
import '../pages/Home.css'
import Importright from '../assets/online-img.jpg'
import Image from '../assets/100+ Students.jpg'
import Attend from '../assets/attend-class.jpg'
import Free from '../assets/free-lifetime.jpg'
import Videorecord from '../assets/video-record.jpg'
import Coursevideo from '../assets/Course_intro.mp4'
import Profile from '../assets/profile.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine,
  faHandHoldingHeart,
  faSeedling
} from '@fortawesome/free-solid-svg-icons'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonials'

// Pages link
import Contact from '../pages/Contact'
import Optionselling from '../pages/Optionselling';

import { Link, Links } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className='swiper-bg'>
            <div className='swiper-head'>
              <h2 className='text-[18px] md:text-[36px] text-center font-bold pl-15 pr-15 md:pl-72 md:pr-72'>
                Become part of a community earning extra income through our
                course guidance.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='swiper-bg-1'>
            <div className='swiper-head'>
              <h2 className='text-[18px] md:text-[36px] text-center font-bold pl-15 pr-15 md:pl-72 md:pr-72'>
                Learn how to generate consistent income through trading
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>{' '}
      {/* <-- This was missing */}
      {/* Welcome to market decoder */}
      <div className='section-1 max-w-[1320px] mx-auto mt-5 p-5 flex justify-evenly flex-wrap'>
        <div className='w-full md:w-1/2 mt-5 md:pr-20'>
          <p className='text-[var(--yellow)] mb-4'>Welcome to market Decoder</p>
          <h2 className='text-[26px] md:text-[37px] md:leading-9 font-semibold'>
            Become part of the multitude who have attained financial freedom
            with our help.
          </h2>
          <p className='pt-3'>
            At Market Decoder, we empower individuals to master the art of
            trading and investment to achieve financial freedom and early
            retirement. Our comprehensive courses are crafted to equip both
            beginners and seasoned traders with the knowledge and skills
            required to navigate the dynamic world of financial markets
            successfully. Learn how to make your money work harder for you with
            our expert guidance.
          </p>
        </div>
        <div className='w-full md:w-1/2 mt-5'>
          <img
            src={Importright}
            alt=''
            className='rounded-2xl h-80 w-full object-cover'
          />
        </div>
      </div>
      {/* Our courses start */}
      <div className='section-2 max-w-[1320px] mx-auto pt-5 pb-5 mt-[70px] mb-[70px]' id='Courses'>
        <p className='text-[24px] md:text-4xl text-center font-bold'>
          Our Courses
        </p>
        <p className='text-center p-4 md:pl-60 md:pr-60'>
          Master the stock market from beginner to advanced levels, mastering
          efficient strategies, risk management, position sizing, trading
          psychology, precise market timing, track record maintenance, and more.
        </p>
        <div className='btn-footer text-center flex justify-center pt-2'>
          <Link to="/Optionselling">
          <h6 className='bg-[#C3B1F8] p-3 rounded-[5px] text-center text-black font-bold w-40 text-[14px] md:text-[16px] cursor-pointer'>
            Option Selling
          </h6>
          </Link>          
        </div>
      </div>
      {/* Why Choose Market Decoder */}
      <div className='section-3 max-w-[1320px] mx-auto p-3 mt-5 mb-5'>
        <p className='text-center text-[24px] md:text-4xl font-bold pb-5 mb-5'>
          Why Choose Market Decoder?
        </p>
        <div className='four-img flex flex-wrap justify-around '>
          <div className='img-1 md:w-1/4 p-2 mb-3'>
            <img
              src={Image}
              alt=''
              className='w-full h-72 object-cover rounded-[5px]'
            />
            <p className='pt-4'>1000+ Students Across India</p>
          </div>
          <div className='img-1 md:w-1/4 p-2 mb-3'>
            <img
              src={Videorecord}
              alt=''
              className='w-full h-72 object-cover rounded-[5px]'
            />
            <p className='pt-4'>Video Recording of Courses</p>
          </div>
          <div className='img-1 md:w-1/4 p-2 mb-3'>
            <img
              src={Attend}
              alt=''
              className='w-full h-72 object-cover rounded-[5px]'
            />
            <p className='pt-4'>
              Attending the class once grants you the privilege to attend
              multiple times without incurring additional fees.
            </p>
          </div>
          <div className='img-1 md:w-1/4 p-2 mb-3'>
            <img
              src={Free}
              alt=''
              className='w-full h-72 object-cover rounded-[5px]'
            />
            <p className='pt-4'>
              Free Lifetime support & Mentorship & Lifetime access Professional
              Community group
            </p>
          </div>
        </div>
        
      </div>
      {/* Uneiling trading */}
      <div className='section-4 max-w-[1320px] mx-auto p-5 flex flex-wrap mt-[80px] mb-5'>
        <div className='md:w-1/2'>
          <p className='text-[24px] md:text-4xl font-bold mb-3'>
            Unveiling Trading Strategies: From Intraday to Long-Term Investments
          </p>
        </div>
        <div className='md:w-1/2'>
          <p className='text-[16px]'>
            In the vast landscape of financial markets, various trading styles
            cater to different objectives and time horizons. Each strategy
            brings its own set of challenges and opportunities.
          </p>
        </div>
        <div className='md:w-1/2 mt-4'>
          <div className='icon-box-width flex justify-start align-top gap-5 mt-5 mb-5'>
            <div className='icon-box'>
              <FontAwesomeIcon
                icon={faChartLine}
                className=' bg-[var(--yellow)] p-[15px] w-fit rounded-[50px]'
              />
            </div>
            <div className='icon-box-text'>
              <h4 className='text-[22px] font-bold mb-2'>Intraday Trading</h4>
              <p className='md:pr-10'>
                Intraday trading, also known as day trading, involves executing
                trades within the same trading day with the goal of capitalizing
                on short-term price movements.
              </p>
            </div>
          </div>
          <div className='icon-box-width flex justify-start align-top gap-5 mt-5 mb-5'>
            <div className='icon-box'>
              <FontAwesomeIcon
                icon={faHandHoldingHeart}
                className=' bg-[var(--yellow)] p-[15px] w-fit rounded-[50px]'
              />
            </div>
            <div className='icon-box-text'>
              <h4 className='text-[22px] font-bold mb-2'>Swing Trading</h4>
              <p className='md:pr-10'>
                Swing trading is a strategy that seeks to capitalize on "swings"
                or price movements within an established trend
              </p>
            </div>
          </div>
          <div className='icon-box-width flex justify-start align-top gap-5 mt-5 mb-5'>
            <div className='icon-box'>
              <FontAwesomeIcon
                icon={faSeedling}
                className=' bg-[var(--yellow)] p-[15px] w-fit rounded-[50px]'
              />
            </div>
            <div className='icon-box-text'>
              <h4 className='text-[22px] font-bold mb-2'>
                Long-Term Investment
              </h4>
              <p className='md:pr-10'>
                Long-term investment is a conservative approach where investors
                commit funds to assets with the intention of holding them for an
                extended period, often years or decades
              </p>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 mt-5'>
          <video
            src={Coursevideo}
            controls
            muted
            className='rounded-[10px] w-full'
          ></video>
          <div className='video-text bg-white p-3 '>
            <div className='video-text-nxt flex justify-center gap-3 text-black'>
              <h3 className='text-[18px] md:text-[28px] font-bold text-[var(--yellow)]'>
                09
              </h3>
              <h6 className='text-[18px] md:text-[28px] font-bold'>
                Years of Experience
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Meet our instructors */}
      <div
        className='section-5 max-w-[1320px] mx-auto p-5 flex flex-wrap'
        id='instructors'
      >
        <div className='md:w-1/2'>
          <img src={Profile} alt='' className='rounded-[10px]' />
          <h6 className='text-2xl font-semibold pt-3'>Nagarajan</h6>
          <p className='text-[14px] pt-2'>Instructor</p>
        </div>
        <div className='md:w-1/2 md:pl-10'>
          <h5 className='text-[28px] mt-5 md:mt-0 md:text-4xl font-semibold'>
            Meet Our Instructors
          </h5>
          <p className='pt-3 pb-2'>
            Mr. Nagarajan has been endorsed as a recommended Technical ANALYST
            and TRAINER by esteemed publications such as The Economic Times,
            Money Control, and Gap Up.
          </p>
          <p className='pt-3 pb-2'>
            With more than nine years of priceless stock market expertise,
            Nagarajan stands out as a stable figure in the fast-paced world of
            finance, where market trends change at the speed of the wind. His
            path is extraordinary, distinguished by a deep comprehension of both
            technical and basic analysis. Beyond trading, Nagarajan has vast
            experience. As an NCFM-certified teacher, he has imparted his vast
            knowledge to over 57 batches, making a lasting impression on
            prospective traders.
          </p>
          <p className='pt-3 pb-2'>
            Nagarajan is a multitasker who handles the intricacies of the
            financial world with ease. Years of practical experience have given
            him a great sense of foresight that has enabled him to make
            remarkably accurate forecasts in a constantly shifting market. Come
            explore the thoughts and experience of Nagarajan, a seasoned expert
            who not only masters the art of trading but also shares his
            knowledge to help others advance financially. the man has a
            compelling goal to help every class of people become financially
            independent. His goal is to teach individuals how to undertake
            technical analysis utilizing tried-and-true methods and wisdom.
          </p>
          <Link to='/Contact'>
            <p className='mt-10 md:mt-[70px] text-[var(--yellow)] hover:underline font-semibold cursor-pointer'>
            Connect with us !!
            </p>
          </Link>
          
        </div>
      </div>
      {/* Our execlusive offer */}
      <div className='section-6 max-w-[1320px] mx-auto p-5 mt-5'>
        <h5 className='text-[28px] text-left md:text-[30px] font-semibold'>
          Our exclusive Offers
        </h5>
        <div className='ex-offer flex flex-wrap mt-3 mb-5'>
          <div className='md:w-1/2 bg-[var(--pink)] md:p-[60px] p-[30px] rounded-[10px]'>
            <h6 className='text-center text-black font-bold text-[28px]'>
              Unlock Your Trading Potential
            </h6>
            <p className='text-[16px] text-center text-black font-medium md:font-semibold pt-3'>
              Start your trading journey with our exclusive free course on
              Market Decoder via YouTube channel. This limited-time offer
              provides you with a taste of our comprehensive educational
              platform, designed to cater to diverse skill levels and interests.
            </p>
            <div className='btn-footer mt-4 flex justify-center mt-3'>
              <h6 className='bg-[var(--yellow)] p-3 rounded-[5px] text-center text-black font-bold w-40 text-[16px] md:text-[16px] cursor-pointer'>
                Go to free course
              </h6>
            </div>
          </div>
          <div className='md:w-1/2 md:p-2 w-full'>
            <div className='w-full h-[350px]'>
              <iframe
                src='https://www.youtube.com/embed/sIPiqFTUqDo?si=9D5-fMwDKocjL-qa'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='w-full h-full'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      {/* Above footer section */}
      <div className='abv-footer bg-[var(--footer)] p-3 rounded-[28px] text-left'>
        <div className="abv-footer-next max-w-[1320px] mx-auto pt-[60px] pb-[60px] pl-5 pr-5 text-black">
        <h4 className='md:text-3xl font-semibold mb-3'>
          With our all-inclusive course, which is the proven method for learning
          and perfecting the art of trading, take a revolutionary trip into the
          realm of efficient trading. We have carefully crafted our curriculum
          to accommodate novices as well as those looking to advance their
          knowledge. Whether you are a novice or an experienced trader, our
          course provides a methodical and comprehensive curriculum covering the
          fundamentals of profitable trading.
        </h4>
        <p className='mt-5 font-semibold'>
          Upon completion of this extensive point trading course, participants
          will possess the expertise and abilities to confidently and precisely
          maneuver through the dynamic realm of point trading.
        </p>
        </div>
        
      </div>
      {/* Footer start */}
      <Footer />
    </>
  )
}

export default Home
