"use_client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

const Sliper = () => {

  return (
    <div className='w-full h-[90px] ts:flex-row ts:gap-[60px] bg-[#1e959b] flex items-center justify-center ts:mt-[54px] vs:mt-[163px]'>
      <div className='ts:hidden w-full h-[90px] bg-[#1e959b] flex items-center justify-center'>
        <Swiper className='ts:hidden'>

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
            <div className='flex items-center justify-center'>
              <Image
                className="ts:hidden"
                src='images/image8.svg'
                width={177} // Ширина изображения
                height={55}
                alt="none"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      <Image
        className="vs:hidden ts:block"
        src='images/image8.svg'
        width={177} // Ширина изображения
        height={55}
        alt="none"
      />
      <Image
        className="vs:hidden ts:block"
        src='images/image8.svg'
        width={177} // Ширина изображения
        height={55}
        alt="none"
      />
      <Image
        className="vs:hidden ts:block"
        src='images/image8.svg'
        width={177} // Ширина изображения
        height={55}
        alt="none"
      />
      <Image
        className="vs:hidden ts:block"
        src='images/image8.svg'
        width={177} // Ширина изображения
        height={55}
        alt="none"
      />
      <Image
        className="vs:hidden ns:block"
        src='images/image8.svg'
        width={177} // Ширина изображения
        height={55}
        alt="none"
      />
    </div>
  );
};

export default Sliper;