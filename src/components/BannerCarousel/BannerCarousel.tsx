// 'use client'
// import 'react-multi-carousel/lib/styles.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import clsx from "clsx";
import Image from "next/image";
import Banner from '@/../public/Home/Banner.png'
import Charecter from '@/../public/Home/Charecters.svg'
import GreenButton from "@/components/GreenButton/GreenButton";
import InfoComponent from "@/components/InfoComponent/InfoComponent";
// import Arrow from '@/../public/Home/Arrow.svg'
// import {Manrope} from "next/font/google";
// import {useState} from "react";
// import Carousel from "react-multi-carousel";
//
//
// function BannerCarousel() {
//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: {max: 4000, min: 3000},
//             items: 1,
//             partialVisibilityGutter: 10
//         },
//         desktop: {
//             breakpoint: {max: 3000, min: 1024},
//             items: 1,
//             partialVisibilityGutter: 10
//         },
//         tablet: {
//             breakpoint: {max: 1024, min: 464},
//             items: 1,
//             partialVisibilityGutter: 10
//         },
//         mobile: {
//             breakpoint: {max: 464, min: 0},
//             items: 1,
//             partialVisibilityGutter: 10,
//         }
//     };
//
//     const arr = [
//         '',
//         '',
//         '',
//         '',
//         '',
//         '',
//         '',
//         '',
//     ]
//
//     const [current, setCurrent] = useState(2)
//     console.log(current)
//
//     return (
//         <Carousel sliderClass={'sliderrr'} responsive={responsive} ssr={true} infinite={true} centerMode={true}
//                   customTransition={'all 300ms ease-in-out'} beforeChange={nextSlide => {
//             switch (nextSlide) {
//                 case 1:
//                     setCurrent(9)
//                     break
//                 case 0:
//                     setCurrent(8)
//                     break
//                 case 10:
//                     setCurrent(2)
//                     break
//                 default:
//                     setCurrent(nextSlide)
//                     break
//             }
//         }}>
//             {arr.map((value, index) => {
//                 return (
//                     // <div key={index} className={clsx('', (index + 2) === current ? 'opacity-100' : ' opacity-10 scale-50')}>
//                     <div key={index} className={clsx('transition-all overflow-y-visible', (index + 2) === current ? 'opacity-100 -mx-[600px]' : ' opacity-10 scale-50')}>
//                         <div className={'h-[1000px] flex items-center'}>
//                             <div className={'relative'}>
//                                 <Image src={Banner} alt={'Case'} width={1200} height={600}
//                                        className={clsx('absolute mx-auto')}/>
//                                 <Image src={Charecter} alt={'Case'} width={910} height={534}
//                                        className={clsx('bottom-0 left-1/3')}/>
//                             </div>
//                             <h1>{index}</h1>
//                         </div>
//                     </div>
//                 )
//             })}
//         </Carousel>
//     )
//         ;
// }
//
// export default BannerCarousel

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m && n) {
        nums1 = nums1.splice(m - 1)
        nums1 = [...nums1, ...nums2].sort((a, b) => a >= b ? a : b)
    }
    else if (n)
        nums1 = [...nums2]
}


export const BannerCarousel = () => {
    return (
        <div className={'mx-auto'}>
            <div></div>
            <div>
                <div></div>
                <div>
                    <div className={'relative'}>
                        <div className={'relative max-w-[1057px] mx-auto'}>
                            <Image src={Banner} alt={"Banner"} width={1057} height={479}
                                   className={'absolute -bottom-0 -z-1000'}/>
                            <Image src={Charecter} alt={"Charecters"} width={910} height={534}
                                   className={'z-1000 mx-auto'}/>
                            <div className={'absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[rgba(17,17,17,1)] to-[rgba(8,8,8,0)] pb-10 flex items-end px-10 rounded-b-2xl'}>
                                <div className={'flex items-center justify-between w-full text-[16px]'}>
                                    <GreenButton>СМОТРЕТЬ</GreenButton>
                                    <h2 className={'text-white font-bold'}>КЕЙСЫ ЛЕТНЕГО ПРОТИВОСТОЯНИЯ</h2>
                                    <InfoComponent firstWord={'20 дней'} secondWord={'до окончания'} stylesFirstWord={'text-green-500 text-[13px]'} stylesSecondWord={'text-[13px] text-white'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
    )
}