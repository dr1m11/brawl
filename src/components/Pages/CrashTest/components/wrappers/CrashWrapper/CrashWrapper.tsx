import clsx from "clsx";
import styles from './CrashWrapper.module.css'
import Image from "next/image";
import BG from "../../../../../../../public/Crash/BG.png";
import {ReactNode} from "react";
import {Manrope} from "next/font/google";


const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500']})

const CrashWrapper = ({children}: {children: ReactNode}) => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={876} className={styles.bg} quality={100}/>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    );
};

export default CrashWrapper;