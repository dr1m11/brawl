'use client'
import Slider, {CustomArrowProps} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import Image from "next/image";
import Case from '@/../public/Case/king.png'
import Arrow from '@/../public/Home/Arrow.svg'
import {Manrope} from "next/font/google";
import {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setIsBetSet, setSocketEvent, setUser, setUserBets} from "@/lib/wheelSlice/wheelSlice";
import axios from "axios";
import {API_URL, SOCKET_API_URL} from "@/constants";


function SampleNextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
        <div>
            <div onClick={onClick}
                 className={'absolute rounded-r-2xl bg-amber-50 -right-[25px] top-0 w-[25px] h-[100px] flex items-center justify-center cursor-pointer'}
                 style={{background: 'linear-gradient(180.00deg, rgb(74, 79, 146),rgb(70, 76, 149) 100%)'}}>
                <Image src={Arrow} alt={'Arrow'} width={8} height={13} className={'rotate-180'}/>
            </div>
        </div>
    );
}

function SamplePrevArrow(props: CustomArrowProps) {
    const {onClick} = props;
    return (
        <div>
            <div onClick={onClick}
                 className={'absolute rounded-l-2xl bg-amber-50 -left-[25px] w-[25px] h-[100px] flex items-center justify-center cursor-pointer'}
                 style={{background: 'linear-gradient(180.00deg, rgb(74, 79, 146),rgb(70, 76, 149) 100%)'}}>
                <Image src={Arrow} alt={'Arrow'} width={8} height={13} />
            </div>
        </div>
    );
}

const manrope = Manrope({weight: ['500'], subsets: ["latin"]})

function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    };

    const ws = useRef(null)

    useEffect(() => {
        // Создание WebSocket соединения при монтировании компонента
        ws.current = new WebSocket(`${SOCKET_API_URL}/drops`);

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            console.log(data)
        };

        ws.current.onclose = () => {
            console.log('WebSocket закрыто');
        };

        ws.current.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    return (
        <div className="slider-container w-[840px] 1060:w-[1010px] gap-x-2 mx-auto">
            <Slider {...settings} >
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
                <div
                    className={' overflow-hidden text-center min-w-[169px] min-h-[100px] border-x-[1px] border-header bg-brawl-purple-header-opacity'}>
                    <Image src={Case} alt={'Case'} width={70} height={70} className={'mx-auto mt-2 mb-3'}/>
                    <h4 className={clsx(manrope.className, 'text-white text-[11px] -mt-[15px]')}>Timosopiaa</h4>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
