import styles from './BottomMenu.module.css'
import GamesBar from "@/components/Header/GamesBar/GamesBar";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import holodilnik from "../../../public/Header/holodilnik.svg";
import baran from "../../../public/Header/baran.svg";
import elPrimo from "../../../public/Header/elPrimo.svg";
import {Manrope} from "next/font/google";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

export const BottomMenu = () => {
    return (
        <>
            <div className={styles.bottom__space}/>
            <div className={styles.root}>
                <div className={styles.content__left__shadows}>
                    <div className={styles.circle}/>
                    <div className={styles.elipse}/>
                </div>
                <div className={clsx(styles.header__center, manrope.className)}>
                    <Link href={'/'}
                          className={styles.header__center__content}>
                        <div className={styles.header__ellipse}/>
                        <div className={styles.header__ellipse__hover}/>
                        <h3 className={styles.header__center__titles}>КЕЙСЫ</h3>
                        <Image src={holodilnik} alt={'Case'} width={138} height={120}
                               className={clsx(styles.header__center__img)}/>
                    </Link>
                    <Link href={'/wheel'}
                          className={styles.header__center__content}>
                        <div className={styles.header__ellipse}/>
                        <div className={styles.header__ellipse__hover}/>
                        <h3 className={styles.header__center__titles}>БАРАБАН</h3>
                        <Image src={baran} alt={'Wheel'} width={138} height={120}
                               className={clsx(styles.header__center__img)}/>
                    </Link>
                    <Link href={'/crash'}
                          className={styles.header__center__content}>
                        <div className={styles.header__ellipse}/>
                        <div className={styles.header__ellipse__hover}/>
                        <h3 className={styles.header__center__titles}>КРАШ</h3>
                        <Image src={elPrimo} alt={'Crash'} width={177} height={133}
                               className={clsx(styles.header__center__img,)} style={{left: -35}}/>
                    </Link>
                </div>
            </div>
        </>
    )
}