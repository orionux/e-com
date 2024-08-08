

import React from 'react'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const images = [
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
    '/images/productpage/lapsmall.png',
  ];

const ModelSlider = () => {
  return (
    <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={7}
      breakpoints={{
        400: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 40,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ overflow:'hidden', width:'80%',height:'100%'}}
    >
        {images.map((src, index) => (
            <SwiperSlide key={index}>
            <Image src={src} alt={`model-${index}`} width='200' height='200' className='img fluid' />  
            </SwiperSlide>
            ))}
      
    </Swiper>
    </div>
  )
}

export default ModelSlider
