"use_client";
import { useState } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

const ToggleBlock = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='vs:mt-[28px] ts:mt-[44px] flex flex-col justify-center items-center'>
            <button className=' w-[233px] h-[70px] font-bold text-[16px] uppercase text-center text-[#1e959b] rounded-[20px] stroke-[1px] stroke-[#000] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)]' onClick={toggleVisibility}>
                {isVisible ? 'Скрыть блок' : 'Показать блок'}
            </button>
            {isVisible && (
                <div>
                    <div className='ts:hidden w-[411px] h-[322px] flex items-center justify-center mt-[29px]'>
                        <Swiper>
                            <SwiperSlide>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center flex-col rounded-[25px] w-[320px] h-[320px] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)]'>
                                        <Image
                                            className=""
                                            src='images/image19.svg'
                                            width={210} // Ширина изображения
                                            height={175}
                                            alt="none"
                                        />
                                        <p className='font-bold text-[16px] text-[#1e959b] mt-[19px]'>Cabify</p>
                                        <p className='font-normal text-[14px] text-[#3c3c3c] w-[232px] mt-[5px]'>Кроссплатформенное приложение
                                            под Android и iOS разработано на
                                            React Native(Python)</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center flex-col rounded-[25px] w-[320px] h-[320px] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)]'>
                                        <Image
                                            className=""
                                            src='images/image19.svg'
                                            width={210} // Ширина изображения
                                            height={175}
                                            alt="none"
                                        />
                                        <p className='font-bold text-[16px] text-[#1e959b] mt-[19px]'>Cabify</p>
                                        <p className='font-normal text-[14px] text-[#3c3c3c] w-[232px] mt-[5px]'>Кроссплатформенное приложение
                                            под Android и iOS разработано на
                                            React Native(Python)</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center flex-col rounded-[25px] w-[320px] h-[320px] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)]'>
                                        <Image
                                            className=""
                                            src='images/image19.svg'
                                            width={210} // Ширина изображения
                                            height={175}
                                            alt="none"
                                        />
                                        <p className='font-bold text-[16px] text-[#1e959b] mt-[19px]'>Cabify</p>
                                        <p className='font-normal text-[14px] text-[#3c3c3c] w-[232px] mt-[5px]'>Кроссплатформенное приложение
                                            под Android и iOS разработано на
                                            React Native(Python)</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center flex-col rounded-[25px] w-[320px] h-[320px] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)]'>
                                        <Image
                                            className=""
                                            src='images/image19.svg'
                                            width={210} // Ширина изображения
                                            height={175}
                                            alt="none"
                                        />
                                        <p className='font-bold text-[16px] text-[#1e959b] mt-[19px]'>Cabify</p>
                                        <p className='font-normal text-[14px] text-[#3c3c3c] w-[232px] mt-[5px]'>Кроссплатформенное приложение
                                            под Android и iOS разработано на
                                            React Native(Python)</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center flex-col rounded-[25px] w-[320px] h-[320px] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)]'>
                                        <Image
                                            className=""
                                            src='images/image19.svg'
                                            width={210} // Ширина изображения
                                            height={175}
                                            alt="none"
                                        />
                                        <p className='font-bold text-[16px] text-[#1e959b] mt-[19px]'>Cabify</p>
                                        <p className='font-normal text-[14px] text-[#3c3c3c] w-[232px] mt-[5px]'>Кроссплатформенное приложение
                                            под Android и iOS разработано на
                                            React Native(Python)</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center flex-col rounded-[25px] w-[320px] h-[320px] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)]'>
                                        <Image
                                            className=""
                                            src='images/image19.svg'
                                            width={210} // Ширина изображения
                                            height={175}
                                            alt="none"
                                        />
                                        <p className='font-bold text-[16px] text-[#1e959b] mt-[19px]'>Cabify</p>
                                        <p className='font-normal text-[14px] text-[#3c3c3c] w-[232px] mt-[5px]'>Кроссплатформенное приложение
                                            под Android и iOS разработано на
                                            React Native(Python)</p>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                    
                </div>

            )}
        </div>
    );
};

export default ToggleBlock;