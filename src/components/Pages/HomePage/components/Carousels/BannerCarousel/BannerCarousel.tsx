'use client'


import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'

import styles from './BannerCarousel.module.css'
import BannerBG from '@/../public/Home/Banner.png'
import Image from "next/image";

export const BannerCarousel = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    className={'w-full h-full'}
                >
                    <SwiperSlide>
                        <Image src={BannerBG} quality={100} alt={'Banner'} width={1057} height={478} className={styles.banner}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={BannerBG} quality={100} alt={'Banner'} width={1057} height={478} className={styles.banner}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={BannerBG} quality={100} alt={'Banner'} width={1057} height={478} className={styles.banner}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={BannerBG} quality={100} alt={'Banner'} width={1057} height={478} className={styles.banner}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}