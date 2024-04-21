import {ReactNode} from "react";
import styles from './GreenButton.module.css'
import {Days_One} from "next/font/google";
import clsx from "clsx";

const daysOne = Days_One({subsets: ["latin"], weight: ["400"]});


const GreenButton = ({children}: {children: ReactNode}) => {
    return (
        <button className={clsx(styles.button, daysOne)}>
            <div className={styles.div}>
                {children}
            </div>
        </button>
    );
};

export default GreenButton;