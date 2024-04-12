'use client'
import styles from './HomePage.module.css'
import Image from "next/image";
import mainBg from '../../../public/Home/Main.svg'
import Case from "@/components/Case/Case";
import CaseImg from '@/../public/Case/Case1.svg'
import Carousel from "@/components/Carousel/Carousel";
import {BannerCarousel} from "@/components/BannerCarousel/BannerCarousel";

const HomePage = () => {
    return (
        <div className={styles.main}>
            <Image src={mainBg} alt={"Background"} height={820} width={1435} className={styles.main__img}/>
            <div className={styles.content}>
                <div className={'my-16 overflow-y-visible'}>
                    <div className={'mb-12 overflow-y-visible'}>
                        <BannerCarousel />
                    </div>
                    <Carousel />
                </div>
                <h2>Популярные кейсы</h2>
                <div className={'grid grid-cols-4 gap-y-10 max-w-[1100px] mx-auto'}>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    <Case title={"КекПукПек"} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;