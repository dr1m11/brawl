'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import {EffectCoverflow, Navigation} from "swiper/modules";
import Slide from "@/components/Slide/Slide";
import SwiperNextButton from "@/components/BannerCarousel/SwiperNextButton";


export const BannerCarousel = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 100,
                modifier: 3,
                slideShadows: false
            }}
            modules={[EffectCoverflow, Navigation]}
            loop
            spaceBetween={-350}
            autoplay
        >
            <SwiperNextButton left/>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
            <SwiperNextButton />
        </Swiper>
    )
}