import styles from './Footer.module.css';
import logo from '@/../public/static/Footer/Logo.png'
import BigStar from '@/../public/static/Footer/BigStar.png'
import Valina from '@/../public/static/Footer/valinu_uberi.png'
import Baba from '../../../public/static/Footer/baba.png'
import Diamond from '../../../public/static/Footer/Diamond.png'
import GamesBar from "@/components/Header/GamesBar/GamesBar";
import Link from "next/link";
import {Manrope} from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
import {memo} from "react";

const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin']})

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.bg}>
                <div className={styles.content}>
                    <div className={styles.content__left}>
                        <div className={styles.content__left__shadows}>
                            <div className={styles.circle}/>
                            <div className={styles.elipse}/>
                        </div>
                        <div className={styles.characters}>
                            <Image src={logo} alt={'Logo'} width={131} height={93}
                                   className={styles.logo} />
                            <Image src={Diamond} alt={'Diamond'} width={34} height={39}
                                   className={styles.diamond} />
                            <Image src={Baba} alt={'Character'} width={371} height={331}
                                   className={styles.baba} />
                            <Image src={Valina} alt={'Character'} width={216} height={242}
                                   className={styles.shooter} />
                            <Image src={BigStar} alt={'BigStar'} width={111} height={116}
                                   className={styles.bigStar} />
                        </div>
                    </div>
                        <div className={styles.content__right}>
                            <div className={styles.content__right__top}>
                                <h1 className={styles.footer__text}>Играй и побеждай!</h1>
                                <div className={styles.game__bar}>
                                    <GamesBar type={'footer'}/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className={clsx(styles.links, manrope.className)}>
                    <Link href={'https://t.me/DoDoSellerHelp_Bot'} className={styles.link}>Поддержка</Link>
                    <Link href={'https://t.me/DodoDrop_news'} className={styles.link}>Наш Telegram</Link>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);