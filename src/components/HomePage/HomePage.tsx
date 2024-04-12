'use client'
import styles from './HomePage.module.css'
import Image from "next/image";
import mainBg from '../../../public/Home/Main.svg'
import Case from "@/components/Case/Case";
import CaseImg from '@/../public/Case/Case1.svg'
import Carousel from "@/components/Carousel/Carousel";
import {BannerCarousel} from "@/components/BannerCarousel/BannerCarousel";
import clsx from "clsx";
import Custom1 from '@/../public/Case/Custom1.svg'
import Custom2 from '@/../public/Case/Custom2.svg'
import Custom3 from '@/../public/Case/Custom3.svg'
import Custom4 from '@/../public/Case/Custom4.svg'

const HomePage = () => {
    return (
        <div className={styles.main}>
            <Image src={mainBg} alt={"Background"} height={820} width={1435} className={styles.main__img}/>
            <div className={styles.content}>
                <div className={'mt-4'}>
                    <div className={'mb-4 overflow-y-visible'}>
                        <BannerCarousel />
                    </div>
                    <Carousel />
                </div>
                <div className={'max-w-[1100px] mx-auto mt-14'}>
                    <h2 className={clsx(styles.casese__heading, 'text-lg font-semibold tracking-wide mb-14')}>Популярные
                        кейсы</h2>
                    <div className={'grid grid-cols-4 gap-y-10 max-w-[1100px] mx-auto mb-32'}>
                        <Case title={"КекПукПек"} image={Custom1} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                        <Case title={"КекПукПек"} image={Custom2} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                        <Case title={"КекПукПек"} image={Custom3} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                        <Case title={"КекПукПек"} image={Custom4} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                    </div>
                    <div className={'grid grid-cols-4 gap-y-10 max-w-[1100px] mx-auto'}>
                        <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;