"use_client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

const Sliper = () => {

  return (
    <div className='w-full h-[90px] ts:hidden bg-[#1e959b] flex items-center justify-center mt-[163px]'>
    <Swiper >
      
        <SwiperSlide className=''>
          <div className='flex items-center justify-center'><Image
            className="ts:hidden"
            src='images/image8.svg'
            width={177} // Ширина изображения
            height={55}
            alt="none"
          /></div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex items-center justify-center'><Image
            className="ts:hidden"
            src='images/image8.svg'
            width={177} // Ширина изображения
            height={55}
            alt="none"
          /></div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex items-center justify-center'><Image
            className="ts:hidden"
            src='images/image8.svg'
            width={177} // Ширина изображения
            height={55}
            alt="none"
          /></div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex items-center justify-center'><Image
            className="ts:hidden"
            src='images/image8.svg'
            width={177} // Ширина изображения
            height={55}
            alt="none"
          /></div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='flex items-center justify-center'><Image
            className="ts:hidden"
            src='images/image8.svg'
            width={177} // Ширина изображения
            height={55}
            alt="none"
          /></div>
        </SwiperSlide>

    </Swiper>
    </div>
  );
};

export default Sliper;