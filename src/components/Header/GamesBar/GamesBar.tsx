import styles from './GamesBar.module.css'
import Link from "next/link";
import holodilnik from '@/../public/static/Header/holodilnik.png'
import baran from '@/../public/static/Header/baran.png'
import elPrimo from '@/../public/static/Header/elPrimo.png'
import clsx from "clsx";
import {Manrope} from "next/font/google";
import Image from "next/image";
import {memo} from "react";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

interface GamesBarProps {
    type?: 'header' | 'footer'
}
const GamesBar = ({type}: GamesBarProps) => {
    return (
        <div className={clsx(type === 'header' ? styles.header__center : styles.footer, manrope.className)}>
            <Link href={'/'} className={type === 'header' ? styles.header__center__content : styles.footer__content}>
                <div className={styles.header__ellipse}/>
                <div className={styles.header__ellipse__hover}/>
                <h3 className={styles.header__center__titles}>КЕЙСЫ</h3>
                <Image src={holodilnik} alt={'Case'} width={169} height={76}
                       className={clsx(styles.header__center__img)}/>
            </Link>
            <Link href={'/wheel'} className={type === 'header' ? styles.header__center__content : styles.footer__content}>
                <div className={styles.header__ellipse}/>
                <div className={styles.header__ellipse__hover}/>
                <h3 className={styles.header__center__titles}>БАРАБАН</h3>
                <Image src={baran} alt={'Wheel'} width={134} height={66} className={clsx(styles.header__center__img)}/>
            </Link>
            <Link href={'/crash'} className={type === 'header' ? styles.header__center__content : styles.footer__content}>
                <div className={styles.header__ellipse}/>
                <div className={styles.header__ellipse__hover}/>
                <h3 className={styles.header__center__titles}>КРАШ</h3>
                <Image src={elPrimo} alt={'Crash'} width={123} height={60}
                       className={clsx(styles.header__center__img,)} style={{left: -35}}/>
            </Link>
        </div>
    );
};

export default memo(GamesBar);