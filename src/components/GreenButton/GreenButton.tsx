import {CSSProperties, ReactNode} from "react";
import styles from './GreenButton.module.css'
import {Days_One} from "next/font/google";
import clsx from "clsx";
import {MouseEvent} from 'react';


const daysOne = Days_One({subsets: ["latin"], weight: ["400"]});

interface GreenButtonProps {
    children: ReactNode
    link?: string
    className?: any
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
    style?: CSSProperties
    disabled?: boolean
}


const GreenButton = ({children, style, className, onClick, disabled}: GreenButtonProps) => {

    return (
        <button className={clsx(styles.button, daysOne, className)} onClick={onClick} style={{
            ...style,
            background: disabled && 'rgba(84, 73, 140, 1)',
            cursor: disabled && 'not-allowed',
        }}
                disabled={disabled}
        >
            <div className={styles.div} style={{background: disabled && 'inherit'}}>
                {children}
            </div>
        </button>
    );
};

export default GreenButton;