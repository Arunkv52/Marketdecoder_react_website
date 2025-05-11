import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import '../components/Testimonial.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

export default function App () {
  return (
    <>
      <div className='testimonial-slider max-w-[1320px] mx-auto p-5 md:pl-16 md:pr-16'>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='testimonial-text'>
              <div className='quote'>"</div>
              <p className='text-center mt-0'>
                Hello Sir, Just a quick thought process about the session. I am
                a novice when it comes to the stock market, but I have an
                immense eagerness to learn, and I consider myself fortunate to
                have you as my mentor. Your wealth of knowledge, modesty, and
                extraordinary patience have made a profound impact on my
                learning journey. In our recent sessions, you not only provided
                comprehensive guidance on technical analysis in the market but
                also emphasized the significance of patience and understanding
                mass psychology, which are pivotal elements for long-term
                success. Your ability to convey these essential aspects has been
                invaluable. Throughout the sessions, you not only shared
                insights on how to generate profits but also emphasized the
                importance of preserving capital. What truly sets you apart is
                your ability to connect with each student in the class,
                understanding their individual needs and adapting your teaching
                approach to their level of comprehension. This personalized
                approach has made a significant difference in our understanding
                and progress. Furthermore, you have facilitated our entry into a
                network of like-minded individuals, fostering a sense of
                assurance that we are in the ideal environment to continue our
                educational and wealth creation journey. Thank you for your
                time.
              </p>
              <p className='testimonial-author text-center mt-5 mb-[50px]'>
               
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-text'>
              <div className='quote'>"</div>
              <p className='text-center'>
              Thank you for a wonderful course. I appreciated your teaching style. After a big fall my life just started now in uptrend. - I will remember those forever! I wish you all to get success.. thank u so much
              </p>
              <p className='testimonial-author text-center mt-5 mb-[50px]'>
                Raj Nalan
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-text'>
              <div className='quote'>"</div>
              <p className='text-center'>
              I want to provide an update here. I am so happy that I am getting a continuous win trade almost 8/10 so far. I am so humbled to thank you for your teaching which helps me to spot the right trading setup. Thank you so much.</p>
              <p className='testimonial-author text-center mt-5 mb-[50px]'>
                Abu
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-text'>
              <div className='quote'>"</div>
              <p className='text-center'>
                Hello Sir, Just a quick thought process about the session. I am
                a novice when it comes to the stock market, but I have an
                immense eagerness to learn, and I consider myself fortunate to
                have you as my mentor. Your wealth of knowledge, modesty, and
                extraordinary patience have made a profound impact on my
                learning journey. In our recent sessions, you not only provided
                comprehensive guidance on technical analysis in the market but
                also emphasized the significance of patience and understanding
                mass psychology, which are pivotal elements for long-term
                success. Your ability to convey these essential aspects has been
                invaluable. Throughout the sessions, you not only shared
                insights on how to generate profits but also emphasized the
                importance of preserving capital. What truly sets you apart is
                your ability to connect with each student in the class,
                understanding their individual needs and adapting your teaching
                approach to their level of comprehension. This personalized
                approach has made a significant difference in our understanding
                and progress. Furthermore, you have facilitated our entry into a
                network of like-minded individuals, fostering a sense of
                assurance that we are in the ideal environment to continue our
                educational and wealth creation journey. Thank you for your
                time.
              </p>
              <p className='testimonial-author text-center mt-5 mb-[50px]'>
                Chitra Kaliappan
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
