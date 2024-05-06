import styles from './Header.module.css'
import holodilnik from '../../../public/Header/holodilnik.svg'
import baran from '../../../public/Header/baran.svg'
import ebobot from '../../../public/Header/ebobot.svg'
import Image from "next/image";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import GreenButton from "@/components/GreenButton/GreenButton";
import Online from '@/../public/Header/Online.svg'
import Link from "next/link";
import Logo from '@/../public/Footer/Logo.svg'

const manrope = Manrope({subsets: ["latin"], weight: ["600"]});

const Header = () => {
    return (
        <header className={clsx(styles.header, manrope.className)}>
            <div className={styles.header__left}>
                <div className={styles.header__logo}>
                    <Image src={Logo} alt={'Logo'} width={95} height={68} />
                </div>
                <h4>выбирай и побеждай</h4>
            </div>
            <div className={styles.header__center}>
                <Link href={'/'} className={styles.header__center__content}>
                    <div className={styles.header__ellipse}/>
                    <div className={styles.header__ellipse__hover}/>
                    <h3 className={styles.header__center__titles}>КЕЙСЫ</h3>
                    <Image src={holodilnik} alt={'Case'} width={138} height={120}
                           className={clsx(styles.header__center__img, 'top-20')}/>
                </Link>
                <Link href={'/'} className={styles.header__center__content}>
                    <div className={styles.header__ellipse}/>
                    <div className={styles.header__ellipse__hover}/>
                    <h3 className={styles.header__center__titles}>БАРАБАН</h3>
                    <Image src={baran} alt={'Wheel'} width={138} height={120} className={clsx(styles.header__center__img, 'top-24')}/>
                </Link>
                <Link href={'/crash'} className={styles.header__center__content}>
                    <div className={styles.header__ellipse}/>
                    <div className={styles.header__ellipse__hover}/>
                    <h3 className={styles.header__center__titles}>КРАШ</h3>
                    <Image src={ebobot} alt={'Crash'} width={177} height={133}
                           className={clsx(styles.header__center__img, 'top-14 min-w-[100px]')}/>
                </Link>
            </div>
            <div className={styles.header__right}>
                <div className={styles.header__right__content}>
                    <div className={'flex'}>
                        <Image src={Online} alt={"Online"} width={17.5} height={20} />
                        <h6 className={styles.header__right__count}>104</h6>
                    </div>
                    <span className={styles.header__right__heading}>в онлайне</span>
                </div>
                <GreenButton>ВОЙТИ</GreenButton>
            </div>
        </header>
    );
};

export default Header;