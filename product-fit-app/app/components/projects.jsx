"use_client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import ToggleBlock from './btn';

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center vs:mt-[90px] ts:mt-[120px]">
            <h1 className='font-bold text-[32px] leading-[125%] uppercase text-center text-[#1e959b]'>проекты команды productfit</h1>
            <div className='ts:grid ts:grid-cols-[repeat(3,_320px)] ts:grid-rows-[repeat(2,_320px)] ts:gap-x-[58px] ts:gap-y-[46px] vs:flex items-center justify-center ts:mt-[50px] vs:mt-[29px]'>
                <div className='ts:hidden w-[411px] h-[322px] flex items-center justify-center'>
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
                <div className='ts:flex vs:hidden justify-center items-center'>
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
                <div className='ts:flex vs:hidden justify-center items-center'>
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
                <div className='ts:flex vs:hidden justify-center items-center'>
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
                <div className='ts:flex vs:hidden justify-center items-center'>
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
                <div className='ts:flex vs:hidden justify-center items-center'>
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
                <div className='ts:flex vs:hidden justify-center items-center '>
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
            </div>
            <ToggleBlock />
        </div>

    );
}

export default Projects; 