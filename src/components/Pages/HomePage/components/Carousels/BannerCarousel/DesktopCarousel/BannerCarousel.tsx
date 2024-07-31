'use client'


import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'

import styles from './BannerCarousel.module.css'
import BannerBG from '../../../../../../../../public/Home/Banner.png'
import Charecters from '../../../../../../../../public/Home/Charecters.png'
import Image from "next/image";
import GreenButton from "@/components/GreenButton/GreenButton";
import {Autoplay, Scrollbar} from "swiper/modules";

export const BannerCarousel = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    className={'w-full h-full overflow-y-visible'}
                    autoplay={true}
                    breakpoints={{
                        1200: {
                            spaceBetween: -120
                        },
                        940: {
                            spaceBetween: -100
                        },
                        600: {
                            spaceBetween: -60
                        },
                        0: {
                            modules: [Scrollbar],
                            scrollbar: true,
                            slidesPerView: 1,
                        }
                    }}
                >
                    <SwiperSlide className={'overflow-visible'}>
                        {
                            ({isActive}) => (
                                <div className={styles.banner__root} style={{transform: !isActive && 'scale(75%)'}}>
                                    <Image
                                        src={BannerBG}
                                        quality={100}
                                        alt={'Banner'}
                                        width={1057}
                                        height={478}
                                        className={styles.banner}/>
                                    <Image
                                        src={Charecters}
                                        alt={'Charecters'}
                                        width={910}
                                        height={543}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.info__content}>
                                            <GreenButton className={styles.button}>ВПЕРЕД!</GreenButton>
                                            <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                            <button className={styles.right__btn}>
                                                РЕГСИТРАЦИЯ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        {
                            ({isActive}) => (
                                <div className={styles.banner__root} style={{transform: !isActive && 'scale(75%)'}}>
                                    <Image
                                        src={BannerBG}
                                        quality={100}
                                        alt={'Banner'}
                                        width={1057}
                                        height={478}
                                        className={styles.banner}/>
                                    <Image
                                        src={Charecters}
                                        alt={'Charecters'}
                                        width={910}
                                        height={543}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.info__content}>
                                            <GreenButton className={styles.button}>ВПЕРЕД!</GreenButton>
                                            <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                            <button className={styles.right__btn}>
                                                РЕГСИТРАЦИЯ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        {
                            ({isActive}) => (
                                <div className={styles.banner__root} style={{transform: !isActive && 'scale(75%)'}}>
                                    <Image
                                        src={BannerBG}
                                        quality={100}
                                        alt={'Banner'}
                                        width={1057}
                                        height={478}
                                        className={styles.banner}/>
                                    <Image
                                        src={Charecters}
                                        alt={'Charecters'}
                                        width={910}
                                        height={543}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.info__content}>
                                            <GreenButton className={styles.button}>ВПЕРЕД!</GreenButton>
                                            <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                            <button className={styles.right__btn}>
                                                РЕГСИТРАЦИЯ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        {
                            ({isActive}) => (
                                <div className={styles.banner__root} style={{transform: !isActive && 'scale(75%)'}}>
                                    <Image
                                        src={BannerBG}
                                        quality={100}
                                        alt={'Banner'}
                                        width={1057}
                                        height={478}
                                        className={styles.banner}/>
                                    <Image
                                        src={Charecters}
                                        alt={'Charecters'}
                                        width={910}
                                        height={543}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.info__content}>
                                            <GreenButton className={styles.button}>ВПЕРЕД!</GreenButton>
                                            <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                            <button className={styles.right__btn}>
                                                РЕГСИТРАЦИЯ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}