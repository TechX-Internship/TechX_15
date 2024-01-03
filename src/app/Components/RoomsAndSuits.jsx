'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function RoomsAndSuits() {
    return (
        <section className='bg-black'>
            <div className="container m-auto py-28">
                <h2 className='text-center text-white text-5xl playfair mb-20'>Room <span className='color-primary'>&</span> Suits</h2>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3} spaceBetween={30} loop={true}>
                    <SwiperSlide>
                        <div className='swipe-slide rounded-[4px]'>
                            <div className="swipe-img">
                                <Image src='/room-1.jpg' width={100} height={100} alt='no' quality={100} layout='responsive' />
                            </div>
                            <div className="swipe-slide-content p-8 text-center">
                                <h4 className='outfit text-white text-2xl font-semibold'>Deluxe Contrast Room</h4>
                                <p className='my-4 color-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid exercitationem consectetur soluta natus delectus obcaecati in porro!</p>
                                <hr />
                                <div className='dsc my-4 flex items-center justify-between w-8/12 m-auto'>
                                    <div className='flex items-center'>
                                        <Image src='/user.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/full-screen.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/hotels.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/bed.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                </div>
                                <hr />
                                <p className='mt-4 text-xl color-primary hover:text-white cursor-pointer'>Book Now <i class="ri-arrow-right-double-line"></i></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swipe-slide rounded-[4px]'>
                            <div className="swipe-img">
                                <Image src='/room-2.jpg' width={100} height={100} alt='no' quality={100} layout='responsive' />
                            </div>
                            <div className="swipe-slide-content p-8 text-center">
                                <h4 className='outfit text-white text-2xl font-semibold'>Deluxe Contrast Room</h4>
                                <p className='my-4 color-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid exercitationem consectetur soluta natus delectus obcaecati in porro!</p>
                                <hr />
                                <div className='dsc my-4 flex items-center justify-between w-8/12 m-auto'>
                                    <div className='flex items-center'>
                                        <Image src='/user.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/full-screen.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/hotels.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/bed.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                </div>
                                <hr />
                                <p className='mt-4 text-xl color-primary hover:text-white cursor-pointer'>Book Now <i class="ri-arrow-right-double-line"></i></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swipe-slide rounded-[4px]'>
                            <div className="swipe-img">
                                <Image src='/room-3.jpg' width={100} height={100} alt='no' quality={100} layout='responsive' />
                            </div>
                            <div className="swipe-slide-content p-8 text-center">
                                <h4 className='outfit text-white text-2xl font-semibold'>Deluxe Contrast Room</h4>
                                <p className='my-4 color-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid exercitationem consectetur soluta natus delectus obcaecati in porro!</p>
                                <hr />
                                <div className='dsc my-4 flex items-center justify-between w-8/12 m-auto'>
                                    <div className='flex items-center'>
                                        <Image src='/user.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/full-screen.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/hotels.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/bed.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                </div>
                                <hr />
                                <p className='mt-4 text-xl color-primary hover:text-white cursor-pointer'>Book Now <i class="ri-arrow-right-double-line"></i></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swipe-slide rounded-[4px]'>
                            <div className="swipe-img">
                                <Image src='/room-1.jpg' width={100} height={100} alt='no' quality={100} layout='responsive' />
                            </div>
                            <div className="swipe-slide-content p-8 text-center">
                                <h4 className='outfit text-white text-2xl font-semibold'>Deluxe Contrast Room</h4>
                                <p className='my-4 color-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid exercitationem consectetur soluta natus delectus obcaecati in porro!</p>
                                <hr />
                                <div className='dsc my-4 flex items-center justify-between w-8/12 m-auto'>
                                    <div className='flex items-center'>
                                        <Image src='/user.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/full-screen.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/hotels.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/bed.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                </div>
                                <hr />
                                <p className='mt-4 text-xl color-primary hover:text-white cursor-pointer'>Book Now <i class="ri-arrow-right-double-line"></i></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swipe-slide rounded-[4px]'>
                            <div className="swipe-img">
                                <Image src='/room-2.jpg' width={100} height={100} alt='no' quality={100} layout='responsive' />
                            </div>
                            <div className="swipe-slide-content p-8 text-center">
                                <h4 className='outfit text-white text-2xl font-semibold'>Deluxe Contrast Room</h4>
                                <p className='my-4 color-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid exercitationem consectetur soluta natus delectus obcaecati in porro!</p>
                                <hr />
                                <div className='dsc my-4 flex items-center justify-between w-8/12 m-auto'>
                                    <div className='flex items-center'>
                                        <Image src='/user.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/full-screen.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/hotels.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/bed.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                </div>
                                <hr />
                                <p className='mt-4 text-xl color-primary hover:text-white cursor-pointer'>Book Now <i class="ri-arrow-right-double-line"></i></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swipe-slide rounded-[4px]'>
                            <div className="swipe-img">
                                <Image src='/room-3.jpg' width={100} height={100} alt='no' quality={100} layout='responsive' />
                            </div>
                            <div className="swipe-slide-content p-8 text-center">
                                <h4 className='outfit text-white text-2xl font-semibold'>Deluxe Contrast Room</h4>
                                <p className='my-4 color-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid exercitationem consectetur soluta natus delectus obcaecati in porro!</p>
                                <hr />
                                <div className='dsc my-4 flex items-center justify-between w-8/12 m-auto'>
                                    <div className='flex items-center'>
                                        <Image src='/user.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/full-screen.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/hotels.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='/bed.svg' width={25} height={25} alt='no' />
                                        <span className='ml-3 text-xl text-white'>2</span>
                                    </div>
                                </div>
                                <hr />
                                <p className='mt-4 text-xl color-primary hover:text-white cursor-pointer'>Book Now <i class="ri-arrow-right-double-line"></i></p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
