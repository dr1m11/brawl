import styles from './Wheel.module.css';
import BG from '@/../public/Wheel/BG.svg'
import Image from "next/image";
import clsx from "clsx";
import {Manrope} from "next/font/google";
import Kostil from "@/components/Pages/Wheel/components/Kostil/Kostil";
import {InfoModal} from "@/components/Pages/Wheel/modals/info/infoModal";


const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin', 'cyrillic']})


const Wheel = () => {
    return (
        <>
            <div className={clsx(styles.root, manrope.className)}>
                <Image src={BG} alt={'Background'} width={1435} height={858} className={styles.bg}/>
                <div className={styles.shadow__right}/>
                <div className={styles.shadow__left}/>
                <div className={styles.wrapper}>
                    <Kostil/>
                </div>
            </div>
            <InfoModal />
        </>
    );
};

export default Wheel;