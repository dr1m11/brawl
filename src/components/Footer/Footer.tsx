import styles from './Footer.module.css';
import logo from '@/../public/static/Footer/Logo.png'
import BigStar from '@/../public/static/Footer/BigStar.svg'
import Valina from '@/../public/static/Footer/valinu_uberi.svg'
import Baba from '../../../public/static/Footer/baba.svg'
import Diamond from '../../../public/static/Footer/Diamond.svg'
import GamesBar from "@/components/Header/GamesBar/GamesBar";
import Link from "next/link";
import {Manrope} from "next/font/google";
import clsx from "clsx";

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
                            <img src={logo.src} alt={'Logo'} width={131} height={93}
                                   className={styles.logo} loading={'eager'} />
                            <img src={Diamond.src} alt={'Diamond'} width={34} height={39}
                                   className={styles.diamond} loading={'eager'} />
                            <img src={Baba.src} alt={'Character'} width={371} height={331}
                                   className={styles.baba} loading={'eager'} />
                            <img src={Valina.src} alt={'Character'} width={216} height={242}
                                   className={styles.shooter} loading={'eager'} />
                            <img src={BigStar.src} alt={'BigStar'} width={111} height={116}
                                   className={styles.bigStar} loading={'eager'} />
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

export default Footer;