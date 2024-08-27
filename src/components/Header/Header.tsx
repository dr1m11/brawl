import styles from './Header.module.css'

import Image from "next/image";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import Logo from '@/../public/Footer/Logo.png'
import MainProfile from "@/components/Header/MainProfile/MainProfile";
import GamesBar from "@/components/Header/GamesBar/GamesBar";
import Online from "@/components/Header/Online/Online";

const manrope = Manrope({subsets: ["latin"], weight: ["600"]});

const Header = () => {
    return (
        <header className={clsx(styles.header, manrope.className)}>
            <div className={styles.header__left}>
                <Link href={'/'} className={styles.header__logo}>
                    <Image src={Logo} alt={'Logo'} width={95} height={68} className={styles.logo__img} quality={100}/>
                </Link>
                <h4 className={styles.header__left__label}>выбирай и побеждай</h4>
            </div>
            <GamesBar type={'header'}/>
            <div className={styles.header__right}>
                <Online />
                <MainProfile />
            </div>
        </header>
    );
};

export default Header;