'use client'
import styles from "./BetButton.module.css";
import localFont from "next/font/local";
import {useAppSelector} from "@/lib/hooks";
import {memo, useMemo} from "react";
import PriceIcon from "@/components/PriceIcon/PriceIcon";
import {PlayerInterface} from "@/lib/crashSlice/crashSlice";


const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface BetButtonProps {
    onClick: () => void
    bet: number
    isBetSet: boolean
    status: 'Pending' | 'Running' | 'Crashed'
    usersBets: PlayerInterface[]
    multiplier: number
}

const BetButton = ({onClick, isBetSet, bet, usersBets, status, multiplier}: BetButtonProps) => {
    const {id, balance} = useAppSelector(state => state.user)
    const isUserBet = useMemo(() => {
        return usersBets && usersBets.find(item => item.player_id === id)
    }, [usersBets])

    return (
        <button
            className={!isBetSet ? styles.bet__btn : styles.withdraw}
            onClick={onClick}
            disabled={(!(status === "Pending") && !isBetSet) || !(+balance) || (+balance < +bet)}
            style={{
                background: (isUserBet && !isBetSet) && "green",
                borderColor: (isUserBet && !isBetSet) && "green"
            }}
        >
            <h5 className={daysOne.className}>{!isBetSet ? "СТАВКА" : "ВЫВОД"}</h5>
            <span className={styles.bet__btn__label}>{(isBetSet && status === "Running") ? (bet * multiplier).toFixed(0) : bet} <PriceIcon /></span>
        </button>
    );
};

export default memo(BetButton);