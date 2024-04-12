import {ReactNode} from "react";
import styles from './CaseButton.module.css'
import {Manrope} from "next/font/google";
import clsx from "clsx";

const manrope = Manrope({subsets: ["latin"], weight: ["500"]});

const CaseButton = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.root}>
            <button className={clsx(styles.button, manrope.className)}>
                {children}
            </button>
        </div>
    );
};

export default CaseButton;