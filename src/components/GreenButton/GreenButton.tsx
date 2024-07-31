import {ReactNode, useRef} from "react";
import styles from './GreenButton.module.css'
import {Days_One} from "next/font/google";
import clsx from "clsx";
import Link from "next/link";


const daysOne = Days_One({subsets: ["latin"], weight: ["400"]});

interface GreenButtonProps {
    children: ReactNode
    link?: string
    className: any
}


const GreenButton = ({children, link, className}: GreenButtonProps) => {

    return (
        <Link href={link ? link : '/'}>
            <button className={clsx(styles.button, daysOne, className)}>
                <div className={styles.div}>
                    {children}
                </div>
            </button>
        </Link>
    );
};

export default GreenButton;