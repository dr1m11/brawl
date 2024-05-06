import styles from './HomePage.module.css'
import Image from "next/image";
import mainBg from '../../../public/Home/Main.svg'
import footerBg from '../../../public/Home/Footer.svg'
import Case from "@/components/Case/Case";
import CaseImg from '@/../public/Case/Case1.svg'
import Carousel from "@/components/Carousel/Carousel";
import {BannerCarousel} from "@/components/BannerCarousel/BannerCarousel";
import clsx from "clsx";
import Custom1 from '@/../public/Case/Custom1.svg'
import Custom2 from '@/../public/Case/Custom2.svg'
import Custom3 from '@/../public/Case/Custom3.svg'
import Custom4 from '@/../public/Case/Custom4.svg'
import InfoComponent from "@/components/InfoComponent/InfoComponent";
import {Manrope} from "next/font/google";

const manrope = Manrope({weight: ['400', '500'], subsets: ['latin']})

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
                        <Case title={"КекПукПек"} id={0} image={Custom1} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                        <Case title={"КекПукПек"} id={1} image={Custom2} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                        <Case title={"КекПукПек"} id={2} image={Custom3} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                        <Case title={"КекПукПек"} id={3} image={Custom4} price={56} width={192} height={193} desc={"хер пойми что важно"} imgStyles={'-mt-4 mb-6'}/>
                    </div>
                    <div className={'flex items-center h-[68px] rounded-3xl p-4 bg-brawl-purple-header mb-16 justify-between'}>
                        <form className={'max-w-[206px] h-full w-full border-header border-[1px] flex items-center rounded-2xl py-[13px] px-[16px]'}>
                            <input placeholder={'Поиск'} className={'text-[11px] bg-brawl-purple-header outline-0 text-white'}/>
                        </form>
                        <div className={'bg-option-bg h-full rounded-3xl flex items-center justify-between max-w-[257px] w-full px-[16px]'}>
                            <span className={clsx(manrope.className, 'opacity-75 text-white text-[11px]')}>0-50Р</span>
                            <span className={clsx(manrope.className, 'opacity-75 text-white text-[11px]')}>50-100Р</span>
                            <span className={clsx(manrope.className, 'opacity-75 text-white text-[11px]')}>100-200Р</span>
                            <span className={clsx(manrope.className, 'opacity-75 text-white text-[11px]')}>500+ Р</span>
                        </div>
                        <InfoComponent firstWord={'Самые дорогие'} stylesFirstWord={'text-[13px] text-white'}/>
                        <InfoComponent firstWord={'Самые дорогие'} stylesFirstWord={'text-[13px] text-white'}/>
                        <InfoComponent firstWord={'Самые дорогие'} stylesFirstWord={'text-[13px] text-white'}/>
                    </div>
                    <div className={'grid grid-cols-4 gap-y-10 max-w-[1100px] mx-auto pb-[100px]'}>
                        <Case title={"КекПукПек"} id={4} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={5} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={6} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={7} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={8} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={9} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={10} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={11} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={12} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={13} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={14} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                        <Case title={"КекПукПек"} id={15} image={CaseImg} price={56} desc={"хер пойми что важно"}/>
                    </div>
                </div>
            </div>
            <Image src={footerBg} alt={"Background"} height={820} width={1435} className={styles.bottom__img}/>
        </div>
    );
};

export default HomePage;