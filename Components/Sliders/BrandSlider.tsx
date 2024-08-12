import React from 'react'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const images = [
    '/images/home/logo1.png',
    '/images/home/logo2.png',
    '/images/home/logo3.png',
    '/images/home/logo4.png',
    '/images/home/logo5.png',
    '/images/home/logo6.png',
    '/images/home/logo1.png',
    '/images/home/logo2.png',
    '/images/home/logo3.png',
    
  ];

const BrandSlider = () => {
  return (
    <div className='flex w-full items-center px-10 pb-5'>
      <Swiper
      modules={[ Autoplay ]}
      spaceBetween={20}
      slidesPerView={'auto'}
      loop={true}
      freeMode= {true}
      speed={10000}
      autoplay= {{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        400: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ overflow:'hidden', width:'100%',height:'100%'}}
    >
        {images.map((src, index) => (
            <SwiperSlide key={index}>
            <Image src={src} alt={`model-${index}`} width='250' height='200' className='cursor-pointer' />  
            </SwiperSlide>
            ))}
      
    </Swiper>
    </div>
  )
}

export default BrandSlider
