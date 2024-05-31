import styles from './Footer.module.css';
import Image from "next/image";
import holodilnik from "../../../public/Header/holodilnik.svg";
import baran from "../../../public/Header/baran.svg";
import ebobot from "../../../public/Header/ebobot.svg";
import logo from '@/../public/Footer/Logo.svg'
import BigStar from '@/../public/Footer/BigStar.svg'
import Valina from '@/../public/Footer/valinu_uberi.svg'
import Baba from '@/../public/Footer/baba.svg'
import SmallStar from '@/../public/Footer/SmallStar.svg'
import Diamond from '@/../public/Footer/Diamond.svg'
import Link from "next/link";


const Footer = () => {
    return (
        <footer className={'min-h-[246px] w-full'}>
            <div className={'bg-brawl-purple-header w-screen h-[246px] mt-20 absolute -left-full -right-full m-auto'}/>
            <div className={'flex relative mx-auto max-w-[1440px]'}>
                <div className={'w-full min-h-[246px]'}/>
                <div className={'w-full flex flex-col justify-between z-10'}>
                    <div className={'max-w-[530px] flex flex-col items-center'}>
                        <h1 className={styles.footer__text}>Играй и побеждай!</h1>
                        <div className={styles.footer__center}>
                            <Link href={'/'} className={styles.footer__center__content}>
                                <h3>КЕЙСЫ</h3>
                                <Image src={holodilnik} alt={'Case'} width={138} height={120}
                                       className={'-rotate-3 -mt-3 opacity-75'}/>
                            </Link>
                            <Link href={'/'} className={styles.footer__center__content}>
                                <h3>БАРАБАН</h3>
                                <Image src={baran} alt={'Wheel'} width={138} height={120}
                                       className={'-rotate-3 -mt-3 opacity-75'}/>
                            </Link>
                            <Link href={'/crash'} className={styles.footer__center__content}>
                                <h3>КРАШ</h3>
                                <Image src={ebobot} alt={'Crash'} width={177} height={133}
                                       className={'-rotate-3 -mt-7 opacity-75'}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={'absolute mt-20 w-full h-full mx-auto'}>
                    <div className={'absolute w-full h-full overflow-y-clip'}>
                        <div className={styles.circle}/>
                        <div className={styles.elipse}/>
                    </div>
                    <Image src={logo} alt={'Logo'} width={131} height={93} className={'absolute bottom-6 left-6'}/>
                    <Image src={SmallStar} alt={'Star'} width={65} height={65}
                           className={'absolute bottom-2 left-[365px]'}/>
                    <Image src={Diamond} alt={'Diamond'} width={34} height={39}
                           className={'absolute left-[535px] -top-5'}/>
                    <Image src={Baba} alt={'Character'} width={371} height={331}
                           className={'absolute left-48 -top-32'}/>
                    <div className={'overflow-y-hidden absolute w-full h-full'}>
                        <Image src={Valina} alt={'Character'} width={216} height={242}
                               className={'absolute left-40 -bottom-12'}/>
                    </div>
                    <Image src={BigStar} alt={'BigStar'} width={111} height={116}
                           className={'absolute -top-10 left-[140px]'}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;