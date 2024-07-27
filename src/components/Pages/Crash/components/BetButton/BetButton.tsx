'use client'
import styles from "./BetButton.module.css";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";
import {useMemo} from "react";


const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface BetButtonProps {
    onClick: () => void
}

const BetButton = ({onClick}: BetButtonProps) => {
    const { bet, isBetSet, socketEvent, usersBets } = useAppSelector(state => state.crash)
    const userId = useAppSelector(state => state.user.id)
    const isUserBet = useMemo(() => {
        return usersBets && usersBets.find(item => item.player_id === userId)
    }, [usersBets])

    return (
        <button
            className={!isBetSet ? styles.bet__btn : styles.withdraw}
            onClick={onClick} disabled={!(socketEvent.status === "Pending") && !isBetSet}
            style={{
                background: (isUserBet && !isBetSet) && "green",
                borderColor: (isUserBet && !isBetSet) && "green"
            }}
        >
            <h5 className={daysOne.className}>{!isBetSet ? "СТАВКА" : "ВЫВОД"}</h5>
            <span className={styles.bet__btn__label}>{(isBetSet && socketEvent.status === "Running") ? (bet * socketEvent.multiplier).toFixed(0) : bet} RUB</span>
        </button>
    );
};

export default BetButton;