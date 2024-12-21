'use client'
import styles from "@/components/Pages/Crash/components/Kostil/Kostil.module.css";
import BetCounter from "@/components/Pages/Crash/components/BetCounter/BetCounter";
import BetTips from "@/components/Pages/Crash/components/BetTips/BetTips";
import BetButton from "@/components/Pages/Crash/components/BetButton/BetButton";
import {FC, memo} from "react";

interface IProps {
    sendBet: (gameId: number, user: string, bet: number) => void
    withdrawBet: (gameId: number, user: string, multiplier: number) => void
}

const BetMenu: FC<IProps> = ({sendBet, withdrawBet}) => {
    return (
        <div className={styles.bet}>
            <BetCounter/>
            <BetTips/>
            <BetButton sendBet={sendBet} withdrawBet={withdrawBet}/>
        </div>
    );
};

export default memo(BetMenu);