'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';

export default function RoomsAndSuits() {
    return (
        <section className='bg-black'>
            <div className="container m-auto py-28">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3} spaceBetween={30} loop={true}>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swipe-slide'>
                                <h1>Hello world</h1>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
