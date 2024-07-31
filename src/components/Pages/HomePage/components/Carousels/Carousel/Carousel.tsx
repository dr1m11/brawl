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
        <div></div>
    );
}

export default Carousel;
