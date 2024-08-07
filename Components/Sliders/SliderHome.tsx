"use client";
import React, { useRef } from 'react';
import Image from 'next/image';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

//swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import { ProductItem } from '../ProductItem';

import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const SliderHome: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className='flex w-full items-center px-10'>
      <button onClick={handlePrevClick} className='mr-2 transition-transform transform hover:scale-110 '>
        <HiArrowLongLeft size={40}/>
      </button>
      <Swiper
        onInit={(swiper) => swiperRef.current = swiper}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        freeMode= {true}
        speed={1000}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        <SwiperSlide>
          <ProductItem imgSrc={'/images/home/1.jpg'} productName={'Sofa Chaise Sleeper'} price={90.00} currency={'$'} ratingStarCount={5} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem imgSrc={'/images/home/2.jpg'} productName={'Sofa Chaise Sleeper'} price={80} currency={'$'} ratingStarCount={2}  />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem imgSrc={'/images/home/3.jpg'} productName={'Sofa Chaise Sleeper'} price={80} currency={'$'} ratingStarCount={2}  />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem imgSrc={'/images/home/4.jpg'} productName={'Sofa Chaise Sleeper'} price={80} currency={'$'} ratingStarCount={4}  />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem imgSrc={'/images/home/1.jpg'} productName={'Sofa Chaise Sleeper'} price={90.00} currency={'$'} ratingStarCount={3}  />
        </SwiperSlide>
      </Swiper>
      <button onClick={handleNextClick} className='ml-2 transition-transform transform hover:scale-110 '>
        <HiArrowLongRight size={40}/>
      </button>
    </div>
  );
};

export default SliderHome;
