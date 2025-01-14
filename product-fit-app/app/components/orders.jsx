"use_client";
import Image from "next/image";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const Orders = () => {
    return (
        <div className='w-full flex items-center justify-center mt-[90px] z-10'>
            <div className="w-full h-[414px] ts:hidden flex items-center justify-center">

                <Swiper >

                    <SwiperSlide >
                        <div className='flex justify-center'>
                            <div className='rounded-[30px] flex-col w-[248px] h-[363px] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)] flex items-center justify-center'>
                                <Image
                                    className="ts:hidden"
                                    src='images/Group190.svg'
                                    width={170} // Ширина изображения
                                    height={170}
                                    alt="none"
                                />
                                <h2 className="font-bold text-[24px] uppercase text-center text-[#1e959b] mt-[12px]">Мобильное
                                    приложение</h2>
                                <button className="mt-[20px] w-[206px] h-[62px] font-bold text-[14px] uppercase text-center text-[#fff] rounded-[20px] bg-[#f05670] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)]">заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex justify-center'>
                            <div className='rounded-[30px] flex-col w-[248px] h-[363px] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)] flex items-center justify-center'>
                                <Image
                                    className="ts:hidden"
                                    src='images/Group190.svg'
                                    width={170} // Ширина изображения
                                    height={170}
                                    alt="none"
                                />
                                <h2 className="font-bold text-[24px] uppercase text-center text-[#1e959b] mt-[12px]">Мобильное
                                    приложение</h2>
                                <button className="mt-[20px] w-[206px] h-[62px] font-bold text-[14px] uppercase text-center text-[#fff] rounded-[20px] bg-[#f05670] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)]">заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex justify-center'>
                            <div className='rounded-[30px] flex-col w-[248px] h-[363px] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)] flex items-center justify-center'>
                                <Image
                                    className="ts:hidden"
                                    src='images/Group190.svg'
                                    width={170} // Ширина изображения
                                    height={170}
                                    alt="none"
                                />
                                <h2 className="font-bold text-[24px] uppercase text-center text-[#1e959b] mt-[12px]">Мобильное
                                    приложение</h2>
                                <button className="mt-[20px] w-[206px] h-[62px] font-bold text-[14px] uppercase text-center text-[#fff] rounded-[20px] bg-[#f05670] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)]">заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex justify-center'>
                            <div className='rounded-[30px] flex-col w-[248px] h-[363px] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)] flex items-center justify-center'>
                                <Image
                                    className="ts:hidden"
                                    src='images/Group190.svg'
                                    width={170} // Ширина изображения
                                    height={170}
                                    alt="none"
                                />
                                <h2 className="font-bold text-[24px] uppercase text-center text-[#1e959b] mt-[12px]">Мобильное
                                    приложение</h2>
                                <button className="mt-[20px] w-[206px] h-[62px] font-bold text-[14px] uppercase text-center text-[#fff] rounded-[20px] bg-[#f05670] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)]">заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex justify-center'>
                            <div className='rounded-[30px] flex-col w-[248px] h-[363px] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)] bg-[linear-gradient(180deg,_#fff_0%,_#f7f9fd_100%)] flex items-center justify-center'>
                                <Image
                                    className="ts:hidden"
                                    src='images/Group190.svg'
                                    width={170} // Ширина изображения
                                    height={170}
                                    alt="none"
                                />
                                <h2 className="font-bold text-[24px] uppercase text-center text-[#1e959b] mt-[12px]">Мобильное
                                    приложение</h2>
                                <button className="mt-[20px] w-[206px] h-[62px] font-bold text-[14px] uppercase text-center text-[#fff] rounded-[20px] bg-[#f05670] [box-shadow:0_5px_10px_0_rgba(30,_149,_155,_0.5)]">заказать</button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
            
        </div>
    );
}

export default Orders; 