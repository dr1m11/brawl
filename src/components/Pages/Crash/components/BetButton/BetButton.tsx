'use client'
import styles from "./BetButton.module.css";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";


const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface BetButtonProps {
    onClick: () => void
}

const BetButton = ({onClick}: BetButtonProps) => {
    const { bet, isBetSet, socketEvent } = useAppSelector(state => state.crash)
    return (
        <button className={!isBetSet ? styles.bet__btn : styles.withdraw} onClick={onClick}>
            <h5 className={daysOne.className}>{!isBetSet ? "СТАВКА" : "ВЫВОД"}</h5>
            <span className={styles.bet__btn__label}>{(isBetSet && socketEvent.status === "Running") ? (bet * socketEvent.multiplier).toFixed(2) : bet} RUB</span>
        </button>
    );
};

export default BetButton;