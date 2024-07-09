import styles from './Wheel.module.css';
import BG from '@/../public/Wheel/BG.svg'
import Image from "next/image";
import clsx from "clsx";
import localFont from "next/font/local";
import {Manrope} from "next/font/google";
import Game from "@/components/Pages/Wheel/components/WheelGame/Game";
import Better from "@/components/Pages/Wheel/components/Better/Better";
import BetButton from "@/components/Pages/Wheel/components/BetButton/BetButton";
import Multipliers from "@/components/Pages/Wheel/components/Multipliers/Multipliers";
import History from "@/components/Pages/Wheel/components/History/History";
import Info from "@/components/Pages/Wheel/components/Info/Info";
import Kostil from "@/components/Pages/Wheel/components/Kostil/Kostil";


const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin', 'cyrillic']})


const Wheel = () => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={858} className={styles.bg}/>
            <div className={styles.wrapper}>
                <Kostil />
            </div>
        </div>
    );
};

export default Wheel;