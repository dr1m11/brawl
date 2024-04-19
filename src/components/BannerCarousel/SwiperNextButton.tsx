'use client'
import {useSwiper} from "swiper/react";

const SwiperNextButton = ({left}: {left?: boolean}) => {
    const swiper = useSwiper()
    return (
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer absolute z-1000 top-[50%] ${left ? 'rotate-180 left-32' : 'right-32'}`} onClick={() => left ? swiper.slidePrev() : swiper.slideNext()}>
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
};

export default SwiperNextButton;