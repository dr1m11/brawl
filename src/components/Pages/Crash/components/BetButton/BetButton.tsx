'use client'
import styles from "./BetButton.module.css";
import localFont from "next/font/local";
import { useAppSelector} from "@/lib/hooks";
import {FC, useMemo} from "react";
import PriceIcon from "@/components/PriceIcon/PriceIcon";

const daysOne = localFont({src: '../../../../../Fonts/DaysOne-Regular.ttf'});

interface IProps {
    sendBet: (gameId: number, user: string, bet: number) => void
    withdrawBet: (gameId: number, user: string, multiplier: number) => void
}

const BetButton: FC<IProps> = ({sendBet, withdrawBet}) => {
    const {bet, isBetSet, socketEvent, usersBets} = useAppSelector(state => state.crash)
    const {id, balance} = useAppSelector(state => state.user)
    const isUserBet = useMemo(() => {
        return usersBets && usersBets.find(item => item.player_id === id)
    }, [id, usersBets])

    const onSend = () => {
        sendBet(socketEvent.game_id, id, bet)
        console.log(socketEvent.game_id)
    }

    const onWithdraw = () => {
        withdrawBet(socketEvent.game_id, id, socketEvent.multiplier)
    }


    return (
        <button
            className={!isBetSet ? styles.bet__btn : styles.withdraw}
            onClick={!isBetSet ? onSend : onWithdraw}
            disabled={(!(socketEvent.status === "Pending") && !isBetSet) || !(+(balance ?? 0)) || (+(balance ?? 0) < +bet)}
            style={{
                background: (isUserBet && !isBetSet) ? "green" : undefined,
                borderColor: (isUserBet && !isBetSet) ? "green" : undefined
            }}
        >
            <h5 className={daysOne.className}>{!isBetSet ? "СТАВКА" : "ВЫВОД"}</h5>
            <span
                className={styles.bet__btn__label}>{(isBetSet && socketEvent.status === "Running") ? (bet * socketEvent.multiplier).toFixed(0) : bet}
                <PriceIcon/></span>
        </button>
    );
};

export default BetButton;