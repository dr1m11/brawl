import styles from './GamesBar.module.css'
import Link from "next/link";
import holodilnik from '@/../public/Header/holodilnik.svg'
import baran from '@/../public/Header/baran.svg'
import elPrimo from '@/../public/Header/elPrimo.svg'
import clsx from "clsx";
import Image from "next/image";
import {Manrope} from "next/font/google";

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
                <Image src={holodilnik} alt={'Case'} width={138} height={120}
                       className={clsx(styles.header__center__img)}/>
            </Link>
            <Link href={'/wheel'} className={type === 'header' ? styles.header__center__content : styles.footer__content}>
                <div className={styles.header__ellipse}/>
                <div className={styles.header__ellipse__hover}/>
                <h3 className={styles.header__center__titles}>БАРАБАН</h3>
                <Image src={baran} alt={'Wheel'} width={138} height={120} className={clsx(styles.header__center__img)}/>
            </Link>
            <Link href={'/crash'} className={type === 'header' ? styles.header__center__content : styles.footer__content}>
                <div className={styles.header__ellipse}/>
                <div className={styles.header__ellipse__hover}/>
                <h3 className={styles.header__center__titles}>КРАШ</h3>
                <Image src={elPrimo} alt={'Crash'} width={177} height={133}
                       className={clsx(styles.header__center__img,)} style={{left: -35}}/>
            </Link>
        </div>
    );
};

export default GamesBar;