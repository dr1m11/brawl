import clsx from "clsx";
import styles from './CrashWrapper.module.css'
import BG from "@/assets/static/Crash/BG.png";
import {ReactNode} from "react";
import {Manrope} from "next/font/google";
import InfoModal from "../../../modals/info/infoModal";

const manrope = Manrope({subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500']})

const CrashWrapper = ({children}: { children: ReactNode }) => {

    return (
        <>
            <div className={clsx(styles.root, manrope.className)}>
                <img
                    src={BG.src}
                    alt={'Background'}
                    width={1435}
                    height={876}
                    className={styles.bg}
                />
                <div className={styles.shadow__left}/>
                <div className={styles.shadow__right}/>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </div>
            <InfoModal/>
        </>
    );
};

export default CrashWrapper;