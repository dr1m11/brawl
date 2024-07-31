import styles from './Footer.module.css';
import Image from "next/image";
import holodilnik from "../../../public/Header/holodilnik.svg";
import baran from "../../../public/Header/baran.svg";
import ebobot from "../../../public/Header/elPrimo.svg";
import logo from '@/../public/Footer/Logo.png'
import BigStar from '@/../public/Footer/BigStar.svg'
import Valina from '@/../public/Footer/valinu_uberi.svg'
import Baba from '@/../public/Footer/baba.svg'
import SmallStar from '@/../public/Footer/SmallStar.svg'
import Diamond from '@/../public/Footer/Diamond.svg'
import Link from "next/link";
import GamesBar from "@/components/Header/GamesBar/GamesBar";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.bg}/>
            <div className={styles.content}>
                <div className={styles.content__left}>
                    <div className={styles.content__left__shadows}>
                        <div className={styles.circle}/>
                        <div className={styles.elipse}/>
                    </div>
                    <div className={styles.characters}>
                        <Image src={logo} alt={'Logo'} quality={100} width={131} height={93} className={styles.logo}/>
                        <Image src={Diamond} alt={'Diamond'} width={34} height={39}
                               className={styles.diamond}/>
                        <Image src={Baba} alt={'Character'} width={371} height={331}
                               className={styles.baba}/>
                        <Image src={Valina} alt={'Character'} width={216} height={242}
                               className={styles.shooter}/>
                        <Image src={BigStar} alt={'BigStar'} width={111} height={116}
                               className={styles.bigStar}/>
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
        </footer>
    );
};

export default Footer;