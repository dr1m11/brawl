'use client'
import styles from './BetTips.module.css'
import {memo} from "react";

interface IBetTipsProps {
    setBet: (bet: number) => void
    bet: number
}

const BetTips = ({setBet, bet}: IBetTipsProps) => {
    return (
        <div className={styles.bet__tips}>
            <span className={styles.tip__sums} onClick={() => setBet(bet + 50)}>+50</span>
            <span className={styles.tip__sums} onClick={() => setBet(bet + 100)}>+100</span>
            <span className={styles.tip__sums} onClick={() => setBet(bet + 200)}>+200</span>
            <span className={styles.tip__sums} onClick={() => setBet(bet + 500)}>+500</span>
            <span className={styles.tip__sums} onClick={() => setBet(bet + 1000)}>+1000</span>
        </div>
    );
};

export default memo(BetTips);