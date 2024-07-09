'use client'
// import {Swiper, SwiperSlide} from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/bundle';
// import {Autoplay, EffectCoverflow, Navigation} from "swiper/modules";
// import Slide from "@/components/Slide/Slide";
// import SwiperNextButton from "@/components/BannerCarousel/SwiperNextButton";

import Slider, {CustomArrowProps} from "react-slick";
import Image from "next/image";
import Case from "../../../../../../public/Case/king.png";
import clsx from "clsx";
import Arrow from "../../../../../../public/Home/Arrow.svg";
import {Manrope} from "next/font/google";
import Slide from "@/components/Slide/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from "react";

function SampleNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer absolute z-10 top-[50%] right-20`} onClick={onClick}>
            <circle cx="20.5" cy="20.5" r="20.5" transform="matrix(-1 0 0 1 44 3)" fill="white"/>
            <g filter="url(#filter0_f_68_2334)">
                <circle cx="20.5" cy="20.5" r="18" transform="matrix(-1 0 0 1 44 3)" stroke="#979797"
                        strokeOpacity="0.43" strokeWidth="5"/>
            </g>
            <path
                d="M28.7071 22.2929C29.0976 22.6834 29.0976 23.3166 28.7071 23.7071L22.3431 30.0711C21.9526 30.4616 21.3195 30.4616 20.9289 30.0711C20.5384 29.6805 20.5384 29.0474 20.9289 28.6569L26.5858 23L20.9289 17.3431C20.5384 16.9526 20.5384 16.3195 20.9289 15.9289C21.3195 15.5384 21.9526 15.5384 22.3431 15.9289L28.7071 22.2929ZM27 22H28V24H27V22Z"
                fill="black"/>
            <defs>
                <filter id="filter0_f_68_2334" x="0" y="0" width="47" height="47" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_68_2334"/>
                </filter>
            </defs>
        </svg>
    );
}

function SamplePrevArrow(props: CustomArrowProps) {
    const {onClick} = props;
    return (
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer absolute z-10 top-[50%] left-20 rotate-180`} onClick={onClick}>
            <circle cx="20.5" cy="20.5" r="20.5" transform="matrix(-1 0 0 1 44 3)" fill="white"/>
            <g filter="url(#filter0_f_68_2334)">
                <circle cx="20.5" cy="20.5" r="18" transform="matrix(-1 0 0 1 44 3)" stroke="#979797"
                        strokeOpacity="0.43" strokeWidth="5"/>
            </g>
            <path
                d="M28.7071 22.2929C29.0976 22.6834 29.0976 23.3166 28.7071 23.7071L22.3431 30.0711C21.9526 30.4616 21.3195 30.4616 20.9289 30.0711C20.5384 29.6805 20.5384 29.0474 20.9289 28.6569L26.5858 23L20.9289 17.3431C20.5384 16.9526 20.5384 16.3195 20.9289 15.9289C21.3195 15.5384 21.9526 15.5384 22.3431 15.9289L28.7071 22.2929ZM27 22H28V24H27V22Z"
                fill="black"/>
            <defs>
                <filter id="filter0_f_68_2334" x="0" y="0" width="47" height="47" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_68_2334"/>
                </filter>
            </defs>
        </svg>
    );
}


export const BannerCarousel = () => {
    const [isActive, setIsActive] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'center',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true,
        centerPadding: "220px",
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
        draggable: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setTimeout(() => {
                setIsActive(newIndex)
            })
        }
        // responsive: [
        //     {
        //         breakpoint: 1080,
        //         settings: {
        //             slidesToShow: 5
        //         }
        //     }
        // ]
    };

    return (
        // <Swiper
        //     effect={"coverflow"}
        //     grabCursor={true}
        //     centeredSlides={true}
        //     slidesPerView={'auto'}
        //     coverflowEffect={{
        //         rotate: 0,
        //         stretch: 10,
        //         depth: 100,
        //         modifier: 3,
        //         slideShadows: false
        //     }}
        //     modules={[Navigation, Autoplay, EffectCoverflow]}
        //     loop
        //     spaceBetween={-350}
        //     autoplay={{
        //         delay: 5000,
        //     }}
        // >
        //     <SwiperNextButton left/>
        //     <SwiperSlide>
        //         <Slide/>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <Slide/>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <Slide/>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <Slide/>
        //     </SwiperSlide>
        //     <SwiperNextButton/>
        // </Swiper>
        <div className="slider-container max-w-[1400px] mx-auto h-[534px]">
            <Slider {...settings} >
                <Slide isActive={isActive == 0}/>
                <Slide isActive={isActive == 1}/>
                <Slide isActive={isActive == 2}/>
            </Slider>
        </div>
    )
}