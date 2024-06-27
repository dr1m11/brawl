import styles from './Header.module.css'

import Image from "next/image";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import Online from '@/../public/Header/Online.svg'
import Link from "next/link";
import Logo from '@/../public/Footer/Logo.svg'
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import MainProfile from "@/components/Header/MainProfile/MainProfile";
import GamesBar from "@/components/Header/GamesBar/GamesBar";
import Burger from "@/components/Header/Burger/Burger";

const manrope = Manrope({subsets: ["latin"], weight: ["600"]});

const Header = () => {
    return (
        <header className={clsx(styles.header, manrope.className)}>
            <Burger />
            <div className={styles.header__left}>
                <Link href={'/'} className={styles.header__logo}>
                    <Image src={Logo} alt={'Logo'} width={95} height={68} className={styles.logo__img}/>
                </Link>
                <h4 className={styles.header__left__label}>выбирай и побеждай</h4>
            </div>
            <GamesBar />
            <div className={styles.header__right}>
                <div className={styles.header__right__content}>
                    <div className={'flex'}>
                        <Image src={Online} alt={"Online"} width={17.5} height={20} />
                        <h6 className={styles.header__right__count}>104</h6>
                    </div>
                    <span className={styles.header__right__heading}>в онлайне</span>
                </div>
                <MainProfile />
            </div>
            <AuthWrapper />
        </header>
    );
};

export default Header;