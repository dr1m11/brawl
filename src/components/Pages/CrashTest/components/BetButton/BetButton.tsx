'use client'
import styles from "./BetButton.module.css";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";


const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface BetButtonProps {
    onClick: () => void
}

const BetButton = ({onClick}: BetButtonProps) => {
    return (
        <button className={styles.bet__btn} onClick={onClick}>
            <h5 className={daysOne.className}>СТАВКА</h5>
            <span className={styles.bet__btn__label}>100 RUB</span>
        </button>
    );
};

export default BetButton;