'use client'
import styles from './BottomMenu.module.css'
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import CaseMobile from '@/../public/BottomMenu/CaseMobile.svg'
import WheelMobile from '@/../public/BottomMenu/WheelMobile.svg'
import {Manrope} from "next/font/google";
import {FaChartLine, FaMoneyBill1Wave} from "react-icons/fa6";
import {GiTwoCoins} from "react-icons/gi";
import {useAppSelector} from "@/lib/hooks";
import {RxAvatar} from "react-icons/rx";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

export const BottomMenu = () => {
    const {balance} = useAppSelector(state => state.user)
    return (
        <>
            <div className={styles.bottom__space}/>
            <div className={clsx(styles.root, manrope.className)}>
                <div className={styles.content}>
                    <Link href={'/'} className={styles.option}>
                        <Image src={CaseMobile} alt={'asd'} width={20} height={20}/>
                        <div className={styles.shadow}/>
                        <p className={styles.optionLabel}>КЕЙСЫ</p>
                    </Link>
                    <Link href={'/crash'} className={styles.option}>
                        <FaChartLine fontSize={20} color={'#848CEC'} height={20}/>
                        <div className={styles.shadow}/>
                        <p className={styles.optionLabel}>КРАШ</p>
                    </Link>
                    {
                        balance !== null &&
                        <Link href={'/payment'} className={styles.option}>
                            <FaMoneyBill1Wave fontSize={20} color={'#848CEC'} height={20}/>
                            <div className={styles.shadow}/>
                            <div className={styles.optionLabel}>{balance} <GiTwoCoins width={20} height={20}/></div>
                        </Link>
                    }
                    <Link href={'/wheel'} className={styles.option}>
                        <Image src={WheelMobile} alt={'asd'} width={20} height={20}/>
                        <div className={styles.shadow}/>
                        <p className={styles.optionLabel}>КОЛЕСО</p>
                    </Link>
                    {
                        balance !== null &&
                        <Link href={'/profile'} className={styles.option}>
                            <RxAvatar fontSize={20} color={'#848CEC'} height={20}/>
                            <div className={styles.shadow}/>
                            <div className={styles.optionLabel}>Профиль</div>
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}