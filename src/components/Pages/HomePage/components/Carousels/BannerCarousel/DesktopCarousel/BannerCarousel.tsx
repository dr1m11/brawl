'use client'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'

import styles from './BannerCarousel.module.css'
import BannerBG from '../../../../../../../../public/static/Home/Banner.png'
import BannerBG2 from '../../../../../../../../public/static/Home/Banner2.png'
import BannerBG3 from '../../../../../../../../public/static/Home/Banner3.png'
import BannerBG4 from '../../../../../../../../public/static/Home/Banner4.png'
import Charecters from '../../../../../../../../public/static/Home/Charecters.png'
import Charecters21 from '../../../../../../../../public/static/Home/Charecters2_1.png'
import Charecters22 from '../../../../../../../../public/static/Home/Charecters2_2.png'
import Charecters23 from '../../../../../../../../public/static/Home/Charecters2_3.png'
import Charecters3 from '../../../../../../../../public/static/Home/Charecters3.png'
import Charecters4 from '../../../../../../../../public/static/Home/Charecters4.png'
import Image from "next/image";
import GreenButton from "@/components/GreenButton/GreenButton";
import {Autoplay, Scrollbar} from "swiper/modules";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {changeLogin} from "@/lib/defaultSlice/defaultSlice";
import {useRouter} from "next/navigation";

export const BannerCarousel = () => {
    const user = useAppSelector(state => state.user.id)

    const router = useRouter()

    const dispatch = useAppDispatch()

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
                    // autoplay={true}
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
                                <div className={styles.banner__root} style={{transform: !isActive ? 'scale(75%)' : undefined}}>
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
                                            <GreenButton onClick={() => {
                                                if (!!user) {
                                                    window.scroll(0, 800)
                                                } else {
                                                    dispatch(changeLogin())
                                                }
                                            }} className={styles.button}>ВПЕРЕД!</GreenButton>
                                            <h1 className={styles.title}>РЕГИСТРИРУЙСЯ В ЧИСЛЕ ПЕРВЫХ</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        {
                            ({isActive}) => (
                                <div className={styles.banner__root} style={{transform: !isActive ? 'scale(75%)' : undefined}}>
                                    <Image
                                        src={BannerBG2}
                                        quality={100}
                                        alt={'Banner'}
                                        width={1057}
                                        height={478}
                                        className={styles.banner}/>
                                    <Image
                                        src={Charecters22}
                                        alt={'Charecters'}
                                        width={1057}
                                        height={524}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <Image
                                        src={Charecters21}
                                        alt={'Charecters'}
                                        width={1057}
                                        height={524}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <Image
                                        src={Charecters23}
                                        alt={'Charecters'}
                                        width={1057}
                                        height={524}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.info__content}>
                                            <GreenButton onClick={() => {
                                                if (user) {
                                                    router.push('/payment')
                                                } else {
                                                    dispatch(changeLogin())
                                                }
                                            }} className={styles.button}>ПОПОЛНЕНИЕ</GreenButton>
                                            <h1 className={styles.title}>+10% К ПОПОЛНЕНИЮ ПО ПРОМОКОДУ OPEN10</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        {
                            ({isActive}) => (
                                <div className={styles.banner__root} style={{transform: !isActive ? 'scale(75%)' : undefined}}>
                                    <Image
                                        src={BannerBG3}
                                        quality={100}
                                        alt={'Banner'}
                                        width={1057}
                                        height={661}
                                        className={styles.banner}/>
                                    <Image
                                        src={Charecters3}
                                        alt={'Charecters'}
                                        width={910}
                                        height={543}
                                        className={styles.charecters3}
                                        quality={100}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.info__content}>
                                            <GreenButton onClick={() => {
                                                router.push('/case/3')
                                            }} className={styles.button}>ЗА ГЕМАМИ</GreenButton>
                                            <h1 className={styles.title}>ПРИУМНОЖЬ ВЫИГРЫШ КЕЙСОМ С ГЕМАМИ И БП</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SwiperSlide>
                    <SwiperSlide className={'overflow-visible'}>
                        {
                            ({isActive}) => (
                                <div className={styles.banner__root} style={{transform: !isActive ? 'scale(75%)' : undefined}}>
                                    <Image
                                        src={BannerBG4}
                                        quality={100}
                                        alt={'Banner'}
                                        width={1057}
                                        height={661}
                                        className={styles.banner}/>
                                    <Image
                                        src={Charecters4}
                                        alt={'Charecters'}
                                        width={1057}
                                        height={534}
                                        className={styles.charecters}
                                        quality={100}
                                    />
                                    <div className={styles.info}>
                                        <div className={styles.info__content}>
                                            <GreenButton onClick={() => {
                                                router.push('/crash')
                                            }} className={styles.button}>КРАШ</GreenButton>
                                            <h1 className={styles.title}>НЕ ДАЙ ЭЛЬ ПРИМО УПАСТЬ, ЗАБЕРИ ГЕМЫ</h1>
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