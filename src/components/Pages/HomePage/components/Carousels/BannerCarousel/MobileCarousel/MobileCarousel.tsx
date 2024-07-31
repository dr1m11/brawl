'use client'


import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade';

import styles from './MobileCarousel.module.css'
import BannerBG from '../../../../../../../../public/Home/Banner.png'
import Charecters from '../../../../../../../../public/Home/Charecters.png'
import Image from "next/image";
import GreenButton from "@/components/GreenButton/GreenButton";
import {Autoplay, EffectFade, Pagination, Scrollbar} from "swiper/modules";
import {changeLogin} from "@/lib/defaultSlice/defaultSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";

export const MobileCarousel = () => {
    const user = useAppSelector(state => state.user.id)

    const dispatch = useAppDispatch()

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect={'fade'}
                    spaceBetween={0}
                    pagination={{
                        type: 'bullets',
                        enabled: true,
                        clickable: true,
                    }}
                    slidesPerView={1}
                    loop={true}
                    fadeEffect={{
                        crossFade: true
                    }}
                    className={'w-full h-full overflow-y-visible'}
                    autoplay={true}
                    speed={1500}
                >
                    <SwiperSlide className={'overflow-visible'}>
                        <div className={styles.banner__root}>
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
                                    <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                    <GreenButton onClick={() => {
                                        if (!!user) {
                                            window.scroll(0, 500)
                                        } else {
                                            dispatch(changeLogin())
                                        }
                                    }} className={styles.button}>ВПЕРЕД!</GreenButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        <div className={styles.banner__root}>
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
                                    <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                    <GreenButton onClick={() => {
                                        if (!!user) {
                                            window.scroll(0, 500)
                                        } else {
                                            dispatch(changeLogin())
                                        }
                                    }} className={styles.button}>ВПЕРЕД!</GreenButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        <div className={styles.banner__root}>
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
                                    <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                    <GreenButton onClick={() => {
                                        if (!!user) {
                                            window.scroll(0, 500)
                                        } else {
                                            dispatch(changeLogin())
                                        }
                                    }} className={styles.button}>ВПЕРЕД!</GreenButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}